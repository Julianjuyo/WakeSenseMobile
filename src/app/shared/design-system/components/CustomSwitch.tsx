import React, { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, View, Animated } from 'react-native';
import { colors } from '../colors/colors';

interface CustomSwitchProps {
  enabled: boolean; // Receive the initial enabled state
  onValueChange: () => void; // Function to handle toggling
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  enabled,
  onValueChange,
}) => {
  const translateX = useRef(new Animated.Value(enabled ? 30 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: enabled ? 30 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [enabled]); // Run animation whenever `enabled` changes

  return (
    <Pressable
      onPress={onValueChange} // Calls the function to update state
      style={[styles.switch, enabled ? styles.on : styles.off]}
    >
      <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  on: {
    backgroundColor: colors.verdeClaro,
  },
  off: {
    backgroundColor: colors.rojoSuave,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.blanco,
    position: 'absolute',
    left: 5,
  },
});

export default CustomSwitch;
