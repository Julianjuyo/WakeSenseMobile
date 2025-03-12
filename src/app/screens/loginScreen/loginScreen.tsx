import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { GoogleIcon, MoonIcon, StarIcon } from '@/assets/icons';
import Button from '../../shared/design-system/components/Button';
import IconButton from '../../shared/design-system/components/IconButton';
import EmailInput from '../../shared/design-system/components/EmailInput';
import PasswordInput from '../../shared/design-system/components/PasswordInput';
import { useloginScreenScreen } from './hook';

export default function loginScreen() {
  const { email, setEmail, password, setPassword, isFormValid, handleLogin } =
    useloginScreenScreen();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Background Image */}
        <Image
          source={require('@/assets/images/stars_texture.jpeg')}
          style={styles.background}
        />
        {/* Decorative Elements */}
        <MoonIcon width={95} height={95} style={styles.moon_1} />
        <StarIcon width={60} height={60} style={styles.star_1} />

        {/* Logo */}
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />

        <MoonIcon width={95} height={95} style={styles.moon_2} />
        <StarIcon width={60} height={60} style={styles.star_2} />

        <Image
          source={require('@/assets/images/Ellipse.png')}
          style={styles.ellipse}
        />

        <View style={styles.inputsContainer}>
          <EmailInput
            value={email}
            setValue={setEmail}
            placeholder="Ingresa tu correo"
          />
          <PasswordInput
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
          />
          <Button
            state={isFormValid ? 'hover' : 'inactive'}
            type="state1"
            label="INGRESAR"
            onPress={handleLogin}
            style={styles.buttonIngresar}
          />
          <IconButton
            state={'inactive'}
            label="Ingresar con Google"
            icon={<GoogleIcon />}
            style={styles.buttonIngresarGoogle}
          />
          <Button
            state={'inactive'}
            type="state1"
            label="REGISTRATE"
            style={styles.buttonRegistrarse}
          />
        </View>

        <MoonIcon width={95} height={95} style={styles.moon_3} />
        <StarIcon width={60} height={60} style={styles.star_3} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ellipse: {
    position: 'absolute',
    width: '100%',
    height: 290,
    top: 380,
    resizeMode: 'contain',
  },
  moon_1: {
    position: 'absolute',
    top: 12,
    left: 16,
  },
  star_1: {
    position: 'absolute',
    top: 30,
    right: 23,
  },
  logo: {
    position: 'absolute',
    top: 131,
  },
  moon_2: {
    position: 'absolute',
    top: 312,
    right: 67,
  },
  star_2: {
    position: 'absolute',
    top: 327,
    left: 64,
  },
  inputsContainer: {
    width: '80%',
    marginTop: 390,
    alignItems: 'center',
  },
  buttonIngresar: {
    marginTop: 77,
  },
  buttonIngresarGoogle: {
    marginTop: 19,
  },
  buttonRegistrarse: {
    marginTop: 34,
  },
  moon_3: {
    position: 'absolute',
    bottom: 13,
    left: 5,
  },
  star_3: {
    position: 'absolute',
    bottom: 73,
    right: 54,
  },
});
