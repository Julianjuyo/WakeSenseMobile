import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function useSoundListScreen() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const [selectedSound, setSelectedSound] = useState<string | null>(
    'Motivación',
  );
  const handleSelectSound = (sound: string) => {
    setSelectedSound(sound);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return {
    selectedSound,
    handleSelectSound,
    handleGoBack,
  };
}
