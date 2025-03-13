import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Typography from '../Typography/Typography';
import colors from '../colors/colors';
import { LockIcon, EyeIcon, EyeOffIcon, ErrorIcon } from '@/assets/icons';
import typography from '../Typography/styles';

interface PasswordInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  error?: string | null;
  onBlur?: (value: string) => void;
}

const isValidPassword = (password: string) => {
  return password.length >= 6;
};

const PasswordInput = (props: PasswordInputProps) => {
  const { error, value, disabled } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [borderColor, setBorderColor] = useState(colors.morado);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [secureText, setSecureText] = useState(true);

  function handleUserInput(text: string) {
    props.setValue(text);
    setIsFocused(text !== '');
    if (props.onBlur) props.onBlur(text);

    if (!isValidPassword(text) && text.length > 0) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      setBorderColor(colors.rojoOscuro);
    } else {
      setPasswordError(null);
      setBorderColor(error ? colors.rojoOscuro : colors.morado);
    }
  }

  useEffect(() => {
    if (error) {
      setBorderColor(colors.rojoOscuro);
      setPasswordError(error);
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
        Contraseña
      </Typography>
      <View
        style={[
          styles.container,
          { borderColor: passwordError ? colors.rojoOscuro : borderColor },
        ]}
      >
        <LockIcon
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
          style={[
            styles.input,
            typography.formValues,
            disabled ? { color: colors.negro } : null,
          ]}
          secureTextEntry={secureText}
          onBlur={() => handleUserInput(value)}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {secureText ? (
            <EyeOffIcon style={styles.icon} />
          ) : (
            <EyeIcon style={styles.icon} />
          )}
        </TouchableOpacity>
      </View>
      {passwordError && (
        <Typography type="formValues" style={styles.errorText}>
          {passwordError}
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
  },
  icon: {
    marginRight: 10,
  },
  errorIcon: {
    marginRight: 5,
    tintColor: colors.rojoOscuro,
  },
  errorText: {
    color: colors.rojoOscuro,
    marginTop: 5,
  },
});

export default PasswordInput;
