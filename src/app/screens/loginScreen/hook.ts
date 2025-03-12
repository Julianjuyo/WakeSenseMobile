import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function useloginScreenScreen() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    if (isFormValid) {
      navigation.navigate('homeScreen');
    }
  };

  const isFormValid = isValidEmail(email) && isValidPassword(password);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isFormValid,
    handleLogin,
  };
}
