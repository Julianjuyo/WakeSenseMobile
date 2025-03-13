import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../shared/design-system/colors/colors';
import { ArrowBack } from '@/assets/icons';
import useNotificationsScreen from './hook';
import Typography from '../../shared/design-system/Typography/Typography';
import Button from '../../shared/design-system/components/Button';

export default function NotificationsScreen() {
  const { handleCancel, handleSaveMessage, message, setMessage } =
    useNotificationsScreen();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/stars_background.png')}
        style={styles.background}
      />

      {/* Back Button */}
      <TouchableOpacity onPress={handleCancel} style={styles.backIcon}>
        <ArrowBack color={colors.morado} />
      </TouchableOpacity>

      {/* Title */}
      <Typography type="h2" style={styles.title}>
        Escribe tu Mensaje{'\n'}
        que recibirás{'\n'}
        cuando suene tu{'\n'}
        alarma.
      </Typography>

      {/* Message Input Box */}
      <TextInput
        style={styles.inputBox}
        placeholder="Escribe tu mensaje aquí..."
        placeholderTextColor={colors.negro}
        value={message}
        onChangeText={setMessage}
        multiline
      />

      {/* Save Button */}
      <Button
        state={'normal'}
        type="state1"
        label="GUARDAR"
        onPress={handleSaveMessage}
        style={styles.saveButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.rojoSuave,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  title: {
    color: colors.morado,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: colors.blanco,
    width: '80%',
    height: 120,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Android shadow
  },
  saveButton: {
    backgroundColor: colors.morado,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButtonText: {
    color: colors.blanco,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
