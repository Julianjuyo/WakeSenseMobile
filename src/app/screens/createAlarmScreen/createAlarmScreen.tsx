import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../../shared/design-system/colors/colors';
import { MoonIcon, StarIcon } from '@/assets/icons';
import Button from '../../shared/design-system/components/Button';
import CustomSwitch from '../../shared/design-system/components/CustomSwitch';
import LabelCustomSwitch from '../../shared/design-system/components/LabelCustomSwitch';
import { useCreateAlarm } from './hook';

interface CreateAlarmScreenProps {
  initialHour?: number;
  initialMinute?: number;
  initialIsPM?: boolean;
}

export default function CreateAlarmScreen(props: CreateAlarmScreenProps) {
  const {
    isAlarmEnabled,
    selectedHour,
    selectedMinute,
    isPM,
    isSoundTrackingEnabled,
    toggleAlarm,
    setSelectedHour,
    setSelectedMinute,
    toggleAMPM,
    toggleSoundTracking,
    handleSaveAlarm,
    handleDeleteAlarm,
    handleAlarmSound,
    handleAlarmNotification,
  } = useCreateAlarm(props);

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require('@/assets/images/stars_texture.jpeg')}
        style={styles.background}
      />

      {/* Decorative Elements */}
      <MoonIcon width={80} height={80} style={styles.moon_1} />
      <MoonIcon width={80} height={80} style={styles.moon_2} />
      <MoonIcon width={80} height={80} style={styles.moon_3} />
      <MoonIcon width={80} height={80} style={styles.moon_4} />
      <StarIcon width={60} height={60} style={styles.star_1} />
      <StarIcon width={60} height={60} style={styles.star_2} />
      <StarIcon width={60} height={60} style={styles.star_3} />

      {/* Alarm Switch */}
      <View style={styles.alarmSwitch}>
        <CustomSwitch enabled={isAlarmEnabled} onValueChange={toggleAlarm} />
      </View>

      {/* Time Picker */}
      <View style={styles.timePicker}>
        <Pressable
          style={[styles.timeBox, styles.hourBox]}
          onPress={() => setSelectedHour((prev) => (prev % 12) + 1)}
        >
          <Text style={styles.timeText}>
            {selectedHour.toString().padStart(2, '0')}
          </Text>
        </Pressable>
        <Text style={styles.colon}>:</Text>
        <Pressable
          style={[styles.timeBox, styles.minuteBox]}
          onPress={() => setSelectedMinute((prev) => (prev + 1) % 60)}
        >
          <Text style={styles.timeText}>
            {selectedMinute.toString().padStart(2, '0')}
          </Text>
        </Pressable>

        {/* AM/PM Selector */}
        <View style={styles.ampmContainer}>
          <Pressable
            onPress={toggleAMPM}
            style={[styles.ampmBox, isPM ? styles.inactive : styles.active]}
          >
            <Text style={styles.ampmText}>AM</Text>
          </Pressable>
          <Pressable
            onPress={toggleAMPM}
            style={[styles.ampmBox, !isPM ? styles.inactive : styles.active]}
          >
            <Text style={styles.ampmText}>PM</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.alarmButtons}>
        <Button
          state="hover"
          type="state1"
          label="SONIDO"
          style={styles.button}
          onPress={handleAlarmSound}
        />
        <Button
          state="hover"
          type="state1"
          label="NOTIFICACIONES"
          style={styles.button}
          onPress={handleAlarmNotification}
        />

        <LabelCustomSwitch
          enabled={isSoundTrackingEnabled}
          onValueChange={toggleSoundTracking}
          label="Funcionalidad de rastreo de sonido"
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <Button
          state="normal"
          type="state2"
          label="ELIMINAR"
          onPress={handleDeleteAlarm}
        />
        <Button
          state="normal"
          type="state1"
          label="GUARDAR"
          onPress={handleSaveAlarm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  moon_2: {
    position: 'absolute',
    top: 370,
    right: 5,
  },
  star_2: {
    position: 'absolute',
    top: 400,
    left: 31,
  },
  moon_3: {
    position: 'absolute',
    bottom: 144,
    left: 180,
  },
  star_3: {
    position: 'absolute',
    bottom: 43,
    right: 54,
  },
  moon_4: {
    position: 'absolute',
    bottom: 13,
    left: 5,
  },
  alarmSwitch: {
    position: 'absolute',
    top: 40,
  },
  timePicker: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blanco,
    padding: 20, // Increase padding for a bigger size
    borderRadius: 20, // Slightly larger border radius for aesthetics
    borderWidth: 3, // Make border more visible
    borderColor: colors.lavanda,
    marginTop: 100,
  },
  timeBox: {
    padding: 15, // Increase padding to make buttons larger
    borderRadius: 10, // Larger radius for a better feel
    textAlign: 'center',
    width: 70, // Set a fixed width to make it more prominent
    height: 70, // Increase height
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourBox: {
    backgroundColor: colors.morado,
  },
  minuteBox: {
    backgroundColor: colors.gris,
  },
  timeText: {
    fontSize: 32, // Increase font size for better readability
    color: colors.blanco,
    textAlign: 'center',
    fontWeight: 'bold', // Make text bold
  },
  colon: {
    fontSize: 40, // Increase font size of colon
    marginHorizontal: 20, // More spacing between hour and minute
    color: colors.negro,
  },
  ampmContainer: {
    flexDirection: 'column',
    marginLeft: 20, // More spacing from the time digits
  },
  ampmBox: {
    padding: 10, // Bigger button
    borderRadius: 8,
    marginVertical: 5, // More spacing between AM/PM options
  },
  active: {
    backgroundColor: colors.rojoSuave,
  },
  inactive: {
    backgroundColor: colors.gris,
  },
  ampmText: {
    fontSize: 20, // Bigger font for AM/PM
    color: colors.blanco,
    textAlign: 'center',
  },
  alarmButtons: {
    top: 60,
  },
  button: {
    marginBottom: 50,
  },
  actionButtons: {
    position: 'absolute',
    bottom: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
});
