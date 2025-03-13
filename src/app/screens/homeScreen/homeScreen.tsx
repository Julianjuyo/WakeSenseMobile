import { View, Text, StyleSheet, Image } from 'react-native';
import Typography from '../../shared/design-system/Typography/Typography';
import colors from '../../shared/design-system/colors/colors';
import {
  MoonIcon,
  StarIcon,
  BellIcon,
  TaskListIcon,
  CalendarIcon,
} from '@/assets/icons';
import Button from '../../shared/design-system/components/Button';
import IconButton from '../../shared/design-system/components/IconButton';
import useHomeScreen from './hook';

export default function HomeScreen() {
  const { handleLogout, handleCreateAlarm, handleListAlarma } = useHomeScreen();
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/stars_texture.jpeg')}
        style={styles.background}
      />

      <Typography type="h1" style={styles.title}>
        Bienvenido,
      </Typography>

      <MoonIcon width={95} height={95} style={styles.moon_1} />

      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      <StarIcon width={60} height={60} style={styles.star_1} />
      <StarIcon width={60} height={60} style={styles.star_2} />
      <MoonIcon width={95} height={95} style={styles.moon_2} />

      <View style={styles.buttonGroup}>
        <IconButton
          state={'active'}
          label="Crear Alarma"
          icon={<BellIcon width={80} height={80} />}
          onPress={handleCreateAlarm}
          style={styles.mainButton}
        />
        <IconButton
          state={'active'}
          label="Lista Alarmas"
          icon={<TaskListIcon width={80} height={80} />}
          onPress={handleListAlarma}
          style={styles.mainButton}
        />
        <IconButton
          state={'inactive'}
          label="Calendario"
          icon={<CalendarIcon width={80} height={80} />}
          style={styles.mainButton}
        />
      </View>

      <Button
        state={'normal'}
        type="state2"
        label="CERRAR SESIÓN"
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    color: colors.lavanda,
    marginTop: 33,
  },
  moon_1: {
    position: 'absolute',
    top: 40,
    right: 0,
  },
  logo: {
    position: 'absolute',
    top: 140,
  },
  star_1: {
    position: 'absolute',
    top: 324,
    left: 29,
  },
  star_2: {
    position: 'absolute',
    top: 587,
    left: 340,
  },
  moon_2: {
    position: 'absolute',
    bottom: 20,
    left: 0,
  },
  buttonGroup: {
    marginTop: 100,
    width: '60%',
    alignItems: 'center',
  },
  mainButton: {
    width: '100%',
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 70,
  },
});
