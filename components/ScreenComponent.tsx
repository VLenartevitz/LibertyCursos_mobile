import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Certifique-se de instalar isso com 'expo install expo-linear-gradient'

export default function ScreenComponent({children} : {children:ReactNode}){
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(149, 43, 149, 0.2)', 'rgba(120, 120, 255, 0.2)']}
        style={styles.gradient}
      />
      {
        children
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});


