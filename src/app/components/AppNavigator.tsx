import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from '../screens/loginScreen/loginScreen';
import homeScreen from '../screens/homeScreen/homeScreen';
import listAlarmsScreen from '../screens/listAlarmsScreen/listAlarmsScreen';
import createAlarmScreen from '../screens/createAlarmScreen/createAlarmScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'createAlarmScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        orientation: 'portrait',
      }}
    >
      <Stack.Screen
        name="loginScreen"
        component={loginScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="homeScreen"
        component={homeScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="listAlarmsScreen"
        component={listAlarmsScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
      <Stack.Screen
        name="createAlarmScreen"
        component={createAlarmScreen as any}
        options={{ gestureEnabled: false, animation: 'none' }}
      />
    </Stack.Navigator>
  );
}
