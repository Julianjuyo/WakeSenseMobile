import React, { useState } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../shared/design-system/colors/colors';
import { ArrowBack } from '@/assets/icons';
import Typography from '../../shared/design-system/Typography/Typography';
import CustomSwitch from '../../shared/design-system/components/CustomSwitch';
import useListAlarmsScreen from './hook';

export default function ListAlarmsScreen() {
  const { alarms, toggleSwitch, handleGoBack, handleEditAlarm } =
    useListAlarmsScreen();

  const renderItem = ({
    item,
  }: {
    item: { id: string; time: string; enabled: boolean };
  }) => (
    <TouchableOpacity onPress={() => handleEditAlarm(item.time)}>
      <View style={styles.alarmItem}>
        <Typography type="h1" style={styles.alarmText}>
          {item.time}
        </Typography>
        <CustomSwitch
          enabled={item.enabled}
          onValueChange={() => toggleSwitch(item.id)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/stars_texture.jpeg')}
        style={styles.background}
      />
      <TouchableOpacity onPress={handleGoBack} style={styles.backIcon}>
        <ArrowBack color={colors.rojoOscuro} />
      </TouchableOpacity>
      <Typography type="h1" style={styles.title}>
        Alarmas
      </Typography>

      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
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
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  title: {
    color: colors.lavanda,
    marginTop: 60,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
    width: '70%',
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lavanda,
    paddingHorizontal: 10,
  },
  alarmText: {
    color: colors.blanco,
  },
});
