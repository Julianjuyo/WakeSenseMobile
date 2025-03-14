import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/loginScreen';
import HomeScreen from '../screens/HomeScreen/homeScreen';
import ListAlarmsScreen from '../screens/ListAlarmsScreen/listAlarmsScreen';
import CreateAlarmScreen from '../screens/CreateAlarmScreen/createAlarmScreen';
import ConfirmDeleteAlarmScreen from '../screens/ConfirmDeleteAlarmScreen/ConfirmDeleteAlarmScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import SoundListScreen from '../screens/SoundListScreen/SoundListScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        orientation: 'portrait',
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="ListAlarmsScreen"
        component={ListAlarmsScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="CreateAlarmScreen"
        component={CreateAlarmScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="ConfirmDeleteAlarmScreen"
        component={ConfirmDeleteAlarmScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="SoundListScreen"
        component={SoundListScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
    </Stack.Navigator>
  );
}
