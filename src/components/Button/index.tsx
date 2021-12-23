import React from 'react';
import {View, Pressable} from 'react-native';

import styles from './styles';

type ButtonProps = {
  type: string;
};

const Button = ({type}: ButtonProps) => {
  return type === 'add' ? (
    <Pressable
      style={({pressed}) => [pressed ? styles.opacity : null, styles.add]}>
      <View style={styles.vertical} />
      <View style={styles.horizontal} />
    </Pressable>
  ) : null;
};

export default Button;
