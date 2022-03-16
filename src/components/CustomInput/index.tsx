import React, {Dispatch, SetStateAction} from 'react';
import {TextInput} from 'react-native';

import styles from './styles';
import useThemedStyled from '../../themes/useThemedStyles';
import useTheme from '../../themes/useTheme';
import {Colors} from '../../types/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const CustomInput = ({label, onChangeText, value}: CustomInputProps) => {
  const theme = useTheme() as Colors;
  const style = useThemedStyled(styles);

  /* const [focus, setFocus] = useState(0); */

  //const animatedIsFocused = new Animated.Value(0);

  const borderColor = useSharedValue(0);
  const color = useSharedValue(0);
  const paddingVertical = useSharedValue(23);
  const fontSize = useSharedValue(14);

  const inputStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        borderColor.value,
        [0, 1],
        [theme.colors.INPUT_BORDER, theme.colors.PRIMARY],
      ),
    };
  });
  const labelStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        color.value,
        [0, 1],
        [theme.colors.PLACEHOLDER, theme.colors.PRIMARY],
      ),
      paddingVertical: withTiming(paddingVertical.value),
      fontSize: withTiming(fontSize.value),
    };
  });

  return (
    <Animated.View style={[style.wrap, inputStyle]}>
      <TextInput
        onFocus={() => {
          borderColor.value = withTiming(1);
          color.value = withTiming(1);
          paddingVertical.value = 8;
          fontSize.value = 12;
        }}
        onBlur={() => {
          console.log(value);
          if (!value) {
            borderColor.value = 0;
            color.value = 0;
            paddingVertical.value = 23;
            fontSize.value = 14;
          }
        }}
        style={style.textInput}
        value={value}
        onChangeText={onChangeText}
      />
      <Animated.Text style={[style.label, labelStyle]}>{label}</Animated.Text>
    </Animated.View>
  );
};

export default CustomInput;
