import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export type ButtonState = 'normal' | 'hover' | 'inactive';
export type ButtonType = 'state1' | 'state2';

interface ButtonProps {
  state: ButtonState;
  type: ButtonType;
  label: string;
  onPress?: () => void;
  style?: any;
}

export default function Button({
  state,
  type,
  label,
  onPress,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type], styles[`${type}_${state}`], style]}
      onPress={state !== 'inactive' ? onPress : undefined}
      activeOpacity={state === 'hover' ? 0.7 : 1}
    >
      <Text style={[styles.text, styles[`${type}_${state}Text`]]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles: { [key: string]: any } = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.negro,
  },
  state1_normal: {
    backgroundColor: colors.morado,
  },
  state1_hover: {
    backgroundColor: colors.blanco,
  },
  state1_inactive: {
    backgroundColor: colors.gris,
  },
  state2_normal: {
    backgroundColor: colors.rojoSuave,
  },
  state2_hover: {
    backgroundColor: colors.blanco,
  },
  state2_inactive: {
    backgroundColor: colors.gris,
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  state1_normalText: {
    color: colors.blanco,
  },
  state1_hoverText: {
    color: colors.morado,
  },
  state1_inactiveText: {
    color: colors.blanco,
  },
  state2_normalText: {
    color: colors.blanco,
  },
  state2_hoverText: {
    color: colors.rojoSuave,
  },
  state2_inactiveText: {
    color: colors.gris,
  },
});
