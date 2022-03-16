import React from 'react';
import {View, Pressable} from 'react-native';

import styles from './styles';
import useThemedStyled from '../../themes/useThemedStyles';

type CheckBoxProps = {
  isChecked: boolean;
  onPress?: () => void;
  disabled?: boolean;
};

const CheckBox = ({isChecked, onPress, disabled}: CheckBoxProps) => {
  const style = useThemedStyled(styles);

  return (
    <Pressable
      style={({pressed}) => [pressed ? style.opacity : null]}
      onPress={onPress}
      disabled={disabled}>
      <View style={style.check}>
        {isChecked ? (
          <>
            <View style={style.smaller} />
            <View style={style.larger} />
          </>
        ) : null}
      </View>
    </Pressable>
  );
};

export default CheckBox;
