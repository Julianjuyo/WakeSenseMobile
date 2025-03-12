import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Audio } from 'expo-av';
import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

interface UseCreateAlarmProps {
  initialHour?: number;
  initialMinute?: number;
  initialIsPM?: boolean;
}

export function useCreateAlarm({
  initialHour,
  initialMinute,
  initialIsPM,
}: UseCreateAlarmProps) {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const currentDate = new Date();
  const defaultHour = initialHour ?? (currentDate.getHours() % 12 || 12);
  const defaultMinute = initialMinute ?? currentDate.getMinutes();
  const defaultIsPM = initialIsPM ?? currentDate.getHours() >= 12;

  const [isAlarmEnabled, setIsAlarmEnabled] = useState(false);
  const [selectedHour, setSelectedHour] = useState(defaultHour);
  const [selectedMinute, setSelectedMinute] = useState(defaultMinute);
  const [isPM, setIsPM] = useState(defaultIsPM);
  const [isSoundTrackingEnabled, setIsSoundTrackingEnabled] = useState(false);

  const toggleAlarm = () => setIsAlarmEnabled((prev) => !prev);
  const toggleAMPM = () => setIsPM((prev) => !prev);
  const toggleSoundTracking = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    console.log(status);

    if (status === 'granted') {
      setIsSoundTrackingEnabled((prev) => !prev);
    } else {
      Alert.alert(
        'Permiso requerido',
        'El acceso al micrófono es necesario para rastrear el sonido.',
        [{ text: 'OK' }],
      );
    }
  };

  const handleSaveAlarm = () => {
    navigation.navigate('listAlarmsScreen');
  };

  const handleDeleteAlarm = () => {
    // navigation.navigate('confirmDeleteAlarmScreen');
  };

  const handleAlarmSound = () => {
    // navigation.navigate('soundListScreen');
  };

  const handleAlarmNotification = () => {
    // navigation.navigate('notificationsScreen');
  };

  return {
    isAlarmEnabled,
    selectedHour,
    selectedMinute,
    isPM,
    isSoundTrackingEnabled,
    toggleAlarm,
    setSelectedHour,
    setSelectedMinute,
    toggleAMPM,
    toggleSoundTracking,
    handleSaveAlarm,
    handleDeleteAlarm,
    handleAlarmSound,
    handleAlarmNotification,
  };
}
