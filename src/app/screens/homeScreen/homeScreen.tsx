import { View, Text, StyleSheet, Image } from 'react-native';
import Typography from '../../shared/design-system/Typography/Typography';
import { colors } from '../../shared/design-system/colors/colors';
import { MoonIcon, StarIcon } from '@/assets/icons';
import Button from '../../shared/design-system/components/Button';

export default function homeScreen() {
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

      <StarIcon width={60} height={60} style={styles.star_1} />
      <StarIcon width={60} height={60} style={styles.star_2} />
      <MoonIcon width={95} height={95} style={styles.moon_2} />

      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <Button
          state={'normal'}
          type="state2"
          label="CERRAR SESIÓN"
          style={styles.buttonCerrarSesion}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    left: 300,
  },
  moon_2: {
    position: 'absolute',
    bottom: 20,
    left: 0,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  buttonCerrarSesion: {
    marginTop: 34,
  },
});
