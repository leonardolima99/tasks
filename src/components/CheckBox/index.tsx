import React from 'react';
import {View, Pressable} from 'react-native';

import styles from './styles';

type CheckBoxProps = {
  isChecked: boolean;
  onPress?: () => void;
  disabled?: boolean;
};

const CheckBox = ({isChecked, onPress, disabled}: CheckBoxProps) => {
  return (
    <Pressable
      style={({pressed}) => [pressed ? styles.opacity : null]}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.check}>
        {isChecked ? (
          <>
            <View style={styles.smaller} />
            <View style={styles.larger} />
          </>
        ) : null}
      </View>
    </Pressable>
  );
};

export default CheckBox;
