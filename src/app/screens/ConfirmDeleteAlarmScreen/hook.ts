import { IPagesNavigation } from '@/src/interfaces';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function useConfirmDeleteAlarm() {
  const navigation = useNavigation<NavigationProp<IPagesNavigation>>();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    navigation.navigate('ListAlarmsScreen');
  };

  return {
    handleCancel,
    handleConfirm,
  };
}
