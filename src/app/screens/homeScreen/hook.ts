import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';
export function useHomeScreen() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const handleLogout = () => {
    navigation.navigate('loginScreen');
  };

  const handleCreateAlarm = () => {
    // navigation.navigate('createAlarmScreen');
  };

  const handleListAlarma = () => {
    // navigation.navigate('listAlarmsScreen');
  };

  return {
    handleLogout,
    handleCreateAlarm,
    handleListAlarma,
  };
}
