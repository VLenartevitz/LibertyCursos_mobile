// DynamicButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
});

export default Button;
