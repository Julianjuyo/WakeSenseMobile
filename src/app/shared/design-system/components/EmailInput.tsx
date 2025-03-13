import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Typography from '../Typography/Typography';
import colors from '../colors/colors';
import { MailIcon, ErrorIcon } from '@/assets/icons';

interface EmailInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  error?: string | null;
  onBlur?: (value: string) => void;
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const EmailInput = (props: EmailInputProps) => {
  const { error, value, disabled } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [borderColor, setBorderColor] = useState(colors.morado);
  const [emailError, setEmailError] = useState<string | null>(null);

  function handleUserInput(text: string) {
    props.setValue(text);
    setIsFocused(text !== '');
    if (props.onBlur) props.onBlur(text);

    if (!isValidEmail(text) && text.length > 0) {
      setEmailError('Email inválido');
      setBorderColor(colors.rojoOscuro);
    } else {
      setEmailError(null);
      setBorderColor(props.error ? colors.rojoOscuro : colors.morado);
    }
  }

  useEffect(() => {
    if (error) {
      setBorderColor(colors.rojoOscuro);
      setEmailError(error);
      setIsFocused(true);
    } else {
      setBorderColor(colors.morado);
    }
  }, [error, value]);

  return (
    <View style={styles.wrapper}>
      <Typography
        type="formLabels"
        style={[
          styles.label,
          { color: disabled ? colors.gris : colors.rojoSuave },
        ]}
      >
        Correo electrónico
      </Typography>
      <View style={[styles.container, { borderColor }]}>
        <MailIcon
          style={[
            styles.icon,
            { tintColor: disabled ? colors.gris : colors.morado },
          ]}
        />
        <TextInput
          allowFontScaling={false}
          autoCapitalize="none"
          value={value}
          editable={!disabled}
          onChangeText={handleUserInput}
          placeholder={props.placeholder}
          placeholderTextColor={colors.negro}
          style={[styles.input, disabled ? { color: colors.negro } : null]}
          keyboardType="email-address"
          onBlur={() => handleUserInput(value)}
        />
        {emailError && <ErrorIcon style={styles.errorIcon} />}
      </View>
      {emailError && (
        <Typography type="bodyText" style={styles.errorText}>
          {emailError}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    marginBottom: 5,
  },
  container: {
    backgroundColor: colors.blanco,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    padding: 10,
    color: colors.negro,
    fontFamily: 'Poppins-Medium',
  },
  icon: {
    marginRight: 10,
  },
  errorIcon: {
    marginLeft: 10,
    tintColor: colors.rojoOscuro,
  },
  errorText: {
    color: colors.rojoOscuro,
    marginTop: 5,
  },
});

export default EmailInput;
