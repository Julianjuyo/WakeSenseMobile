import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function useListAlarmsScreen() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const alarmsData = [
    { id: '1', time: '6:40 AM', enabled: true },
    { id: '2', time: '6:45 AM', enabled: false },
    { id: '3', time: '7:00 AM', enabled: true },
    { id: '4', time: '1:35 PM', enabled: false },
    { id: '5', time: '2:00 PM', enabled: false },
    { id: '6', time: '4:30 PM', enabled: true },
    { id: '7', time: '6:25 PM', enabled: false },
    { id: '8', time: '8:55 PM', enabled: false },
  ];

  const [alarms, setAlarms] = useState(alarmsData);

  const toggleSwitch = (id: string) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm) =>
        alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm,
      ),
    );
  };

  const handleGoBack = () => {
    navigation.navigate('HomeScreen');
  };

  const handleEditAlarm = (time: string) => {
    // Extract hour, minute, and AM/PM
    const timeParts = time.split(/[: ]/); // Split by ":" and space
    const hour = parseInt(timeParts[0], 10);
    const minute = parseInt(timeParts[1], 10);
    const isPM = timeParts[2] === 'PM';

    // Navigate using the correct screen name
    navigation.navigate('CreateAlarmScreen', {
      initialHour: hour,
      initialMinute: minute,
      initialIsPM: isPM,
    });
  };

  return {
    alarms,
    toggleSwitch,
    handleGoBack,
    handleEditAlarm,
  };
}
