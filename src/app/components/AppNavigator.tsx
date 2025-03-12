import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IPagesNavigation } from '../../interfaces';
import loginScreen from '../screens/loginScreen/loginScreen';
import homeScreen from '../screens/homeScreen/homeScreen';
import listAlarmsScreen from '../screens/listAlarmsScreen/listAlarmsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'listAlarmsScreen'}
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
    </Stack.Navigator>
  );
}
