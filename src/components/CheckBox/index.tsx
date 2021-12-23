import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

type CheckBoxProps = {
  isChecked: boolean;
  onPress?: () => void;
};

const CheckBox = ({isChecked, onPress}: CheckBoxProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.check}>
        {isChecked ? (
          <>
            <View style={styles.smaller} />
            <View style={styles.larger} />
          </>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;