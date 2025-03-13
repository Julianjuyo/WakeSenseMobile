import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function useNotificationsScreen() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();
  const [message, setMessage] = useState('');

  const handleSaveMessage = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return {
    handleCancel,
    handleSaveMessage,
    message,
    setMessage,
  };
}
