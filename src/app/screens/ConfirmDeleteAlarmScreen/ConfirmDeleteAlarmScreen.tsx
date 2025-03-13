import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../shared/design-system/colors/colors';
import useConfirmDeleteAlarm from './hook';
import Typography from '../../shared/design-system/Typography/Typography';
import Button from '../../shared/design-system/components/Button';

export default function ConfirmDeleteAlarmScreen() {
  const { handleCancel, handleConfirm } = useConfirmDeleteAlarm();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/stars_background.png')}
        style={styles.background}
      />

      {/* Confirmation Modal */}
      <View style={styles.modalContainer}>
        <Typography type="subHeading1" style={styles.message}>
          ¿Estás seguro que quieres eliminar esta alarma?
        </Typography>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            state={'normal'}
            type="state2"
            label="NO"
            onPress={handleCancel}
            style={[styles.button, styles.noButton]}
          />
          <Button
            state={'normal'}
            type="state1"
            label="SI"
            onPress={handleConfirm}
            style={[styles.button, styles.yesButton]}
          />
        </View>
      </View>
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
  modalContainer: {
    backgroundColor: colors.blanco,
    padding: 25,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  message: {
    fontSize: 18,
    color: colors.negro,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: 90,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
  },
  noButton: {
    backgroundColor: colors.rojoSuave,
    borderColor: colors.negro,
  },
  yesButton: {
    backgroundColor: colors.morado,
    borderColor: colors.negro,
  },
  noText: {
    color: colors.negro,
    fontSize: 16,
    fontWeight: 'bold',
  },
  yesText: {
    color: colors.blanco,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
