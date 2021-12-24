import React from 'react';
import {View, Pressable, Text} from 'react-native';

import styles from './styles';

type ButtonProps = {
  type: string;
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({type, onPress, disabled, children}: ButtonProps) => {
  if (type === 'plus') {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [
          pressed ? styles.opacity : null,
          styles.button,
          styles.plus,
        ]}>
        <View style={styles.vertical} />
        <View style={styles.horizontal} />
      </Pressable>
    );
  } else if (type === 'add') {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [
          pressed ? styles.opacity : null,
          styles.button,
          styles.add,
          disabled ? styles.disabled : null,
        ]}>
        <Text style={[styles.buttonText, children ? styles.spacing : null]}>
          Add
        </Text>
        {children}
      </Pressable>
    );
  } else if (type === 'back') {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [
          pressed ? styles.opacity : null,
          styles.button,
          styles.back,
        ]}>
        <View style={styles.higher} />
        <View style={styles.bottom} />
      </Pressable>
    );
  }

  return null;
};

export default Button;
