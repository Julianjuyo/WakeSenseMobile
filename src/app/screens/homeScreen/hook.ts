import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function useHomeScreen() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  const handleCreateAlarm = () => {
    navigation.navigate('CreateAlarmScreen');
  };

  const handleListAlarma = () => {
    navigation.navigate('ListAlarmsScreen');
  };

  return {
    handleLogout,
    handleCreateAlarm,
    handleListAlarma,
  };
}
