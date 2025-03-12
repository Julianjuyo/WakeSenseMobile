import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Animated } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../colors/colors';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const translateX = new Animated.Value(isEnabled ? 30 : 0);

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    Animated.timing(translateX, {
      toValue: isEnabled ? 0 : 30,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={toggleSwitch}
          style={[styles.switch, isEnabled ? styles.on : styles.off]}
        >
          <Animated.View
            style={[styles.circle, { transform: [{ translateX }] }]}
          />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  on: {
    backgroundColor: colors.rosaPastel, // Bright green when ON
  },
  off: {
    backgroundColor: colors.rojoSuave, // Red when OFF
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
