import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../shared/design-system/colors/colors';
import { ArrowBack, CheckIcon } from '@/assets/icons';
import Typography from '../../shared/design-system/Typography/Typography';
import useSoundListScreen from './hook';

const personalSounds = ['Motivación', 'Bad Bunny', 'Marron', 'Audio 1'];
const genericSounds = ['Mar y brisa', 'Banda sonora', 'Claptone', 'Clasico'];

export default function SoundListScreen() {
  const { selectedSound, handleSelectSound, handleGoBack } =
    useSoundListScreen();

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.soundItem}
      onPress={() => handleSelectSound(item)}
    >
      {selectedSound === item && <CheckIcon style={styles.checkIcon} />}
      <Typography type="subHeading1" style={styles.soundTypography}>
        {item}
      </Typography>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/stars_background.png')}
        style={styles.background}
      />

      {/* Back Button */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backIcon}>
        <ArrowBack color={colors.lavanda} />
      </TouchableOpacity>

      {/* Title */}
      <Typography type="h1" style={styles.title}>
        Sonidos
      </Typography>

      {/* Personal Sounds */}
      <Typography type="subHeading2" style={styles.categoryTitle}>
        PERSONALIZADOS
      </Typography>
      <View style={styles.soundList}>
        <FlatList
          data={personalSounds}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
      </View>

      {/* Generic Sounds */}
      <Typography type="subHeading2" style={styles.categoryTitle}>
        GENERICOS
      </Typography>
      <View style={styles.soundList}>
        <FlatList
          data={genericSounds}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
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
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  title: {
    position: 'absolute',
    color: colors.negro,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    top: 40,
  },
  categoryTitle: {
    color: colors.morado,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  soundList: {
    backgroundColor: colors.blanco,
    borderRadius: 15,
    width: '80%',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 2,
    borderColor: colors.negro,
  },
  soundItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lavanda,
  },
  soundTypography: {
    fontSize: 16,
    color: colors.negro,
  },
  checkIcon: {
    marginRight: 10,
    color: 'green', // Check mark color
  },
});
