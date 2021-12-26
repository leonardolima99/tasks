import React from 'react';
import {View, Pressable, useColorScheme} from 'react-native';

import {styles, dark, light} from './styles';

type CheckBoxProps = {
  isChecked: boolean;
  onPress?: () => void;
  disabled?: boolean;
};

const CheckBox = ({isChecked, onPress, disabled}: CheckBoxProps) => {
  const theme = useColorScheme();

  return (
    <Pressable
      style={({pressed}) => [pressed ? styles.opacity : null]}
      onPress={onPress}
      disabled={disabled}>
      <View
        style={[
          styles.check,
          theme === 'dark' ? dark.check : light.check,
          theme === 'dark' ? dark.background : light.background,
        ]}>
        {isChecked ? (
          <>
            <View
              style={[
                styles.smaller,
                theme === 'dark' ? dark.smaller : light.smaller,
              ]}
            />
            <View
              style={[
                styles.larger,
                theme === 'dark' ? dark.larger : light.larger,
              ]}
            />
          </>
        ) : null}
      </View>
    </Pressable>
  );
};

export default CheckBox;
