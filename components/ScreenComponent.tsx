import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ScreenComponentProps {
  children: ReactNode;
  style?: ViewStyle;
}

export default function ScreenComponent({ children, style }: ScreenComponentProps) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={['rgba(149, 43, 149, 0.2)', 'rgba(120, 120, 255, 0.2)']}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
