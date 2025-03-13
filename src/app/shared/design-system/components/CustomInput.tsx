import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import MaskInput, { createNumberMask } from 'react-native-mask-input';

import Typography from '../Typography/Typography';
import colors from '../colors/colors';
import {
  ErrorIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
} from '@/assets/icons';

const dollarMask = createNumberMask({
  prefix: [],
  delimiter: '.',
  separator: ',',
  precision: 3,
});

interface IProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  icon?: 'mail' | 'password';
  keyboardType?: 'default' | 'numeric' | 'email-address';
  style?: any;
  focusColor?: string;
  disabled?: boolean;
  borderColor?: string;
  maxLength?: number;
  error?: string | null;
  onBlur?: (value: string) => void;
}

const CustomInput = (props: IProps) => {
  const { error, value, icon } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [focusColor, setFocusColor] = useState(
    props.focusColor ?? colors.morado,
  );
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);

  function handleUserInput() {
    setIsFocused(value !== '');
    if (props.onBlur) props.onBlur(value);
  }

  useEffect(() => {
    if (error) {
      setFocusColor(colors.rojoSuave);
      setIsFocused(true);
    } else {
      setFocusColor(props.focusColor ?? colors.morado);
    }
  }, [error, value]);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isFocused
            ? focusColor
            : props.borderColor || colors.morado,
        },
      ]}
    >
      <View style={styles.containerH}>
        {icon === 'mail' && <MailIcon style={styles.icon} />}
        {icon === 'password' && <LockIcon style={styles.icon} />}
        <TextInput
          allowFontScaling={false}
          autoCapitalize="none"
          value={value}
          editable={!props.disabled}
          onChangeText={props.setValue}
          placeholder={props.placeholder}
          placeholderTextColor={colors.gris}
          style={[
            styles.input,
            props.disabled ? { color: colors.lavanda, opacity: 0.5 } : null,
          ]}
          secureTextEntry={showPassword}
          onBlur={handleUserInput}
          keyboardType={props.keyboardType}
        />
        {icon === 'password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOffIcon style={styles.icon} />
            ) : (
              <EyeIcon style={styles.icon} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Typography type="bodyText" style={{ color: colors.rojoSuave }}>
          <ErrorIcon style={styles.errorIcon} /> {error}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blanco,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 10,
  },
  containerH: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 5,
  },
});

export default CustomInput;
