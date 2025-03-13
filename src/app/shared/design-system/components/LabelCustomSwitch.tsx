import React, { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, View, Animated } from 'react-native';
import Typography from '../Typography/Typography';
import colors from '../colors/colors';

interface CustomSwitchProps {
  enabled: boolean;
  onValueChange: () => void;
  label?: string;
}

const LabelCustomSwitch: React.FC<CustomSwitchProps> = ({
  enabled,
  onValueChange,
  label,
}) => {
  const translateX = useRef(new Animated.Value(enabled ? 45 : 5)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: enabled ? 45 : 5, // Adjust position to prevent overlap
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [enabled]);

  return (
    <Pressable
      onPress={onValueChange}
      style={[styles.container, enabled ? styles.on : styles.off]}
    >
      <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
      {label && (
        <Typography type="formLabels" style={styles.label}>
          {label}
        </Typography>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 230, // Ensure enough space
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    justifyContent: 'flex-start', // Align text properly
  },
  on: {
    backgroundColor: colors.verdeClaro, // Change color when enabled
  },
  off: {
    backgroundColor: colors.rojoSuave,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blanco,
    position: 'absolute',
  },
  label: {
    flex: 1,
    textAlign: 'center',
    color: colors.negro, // Always black
    fontWeight: 'bold',
    marginLeft: 60, // Ensure text is readable and not overlapped
  },
});

export default LabelCustomSwitch;
