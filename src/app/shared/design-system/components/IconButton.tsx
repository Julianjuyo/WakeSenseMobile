import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { colors } from '../colors/colors';
import Typography from '../Typography/Typography';

export type IconButtonState = 'active' | 'inactive';

interface IconButtonProps {
  state: IconButtonState;
  label: string;
  icon: JSX.Element | string;
  onPress?: () => void;
  style?: any;
}

export default function IconButton({
  state,
  label,
  icon,
  onPress,
  style,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[state], style]}
      onPress={state !== 'inactive' ? onPress : undefined}
    >
      <View style={styles.content}>
        {typeof icon === 'string' ? (
          <Image source={{ uri: icon }} style={styles.icon} />
        ) : (
          icon
        )}
        <Typography type="button" style={[styles.text, styles[`${state}Text`]]}>
          {label}
        </Typography>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.negro,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  active: {
    backgroundColor: colors.morado,
  },
  inactive: {
    backgroundColor: colors.gris,
  },
  text: {
    marginLeft: 10,
  },
  activeText: {
    color: colors.blanco,
  },
  inactiveText: {
    color: colors.blanco,
  },
});
