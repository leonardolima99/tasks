import React, {Dispatch, SetStateAction} from 'react';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  onChangeText?: Dispatch<SetStateAction<string>>;
  iconName?: string;
  editable?: boolean;
};

const CustomInput = ({
  label,
  value,
  onChangeText = undefined,
  iconName,
  editable = true,
}: CustomInputProps) => {
  const theme = useTheme() as Colors;
  const style = useThemedStyled(styles);

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
      <Animated.Text style={[style.label, labelStyle]}>{label}</Animated.Text>
      {iconName ? (
        <Icon
          name={iconName}
          size={24}
          color={
            value.toLocaleString()
              ? theme.colors.PRIMARY
              : theme.colors.INPUT_TEXT
          }
          style={style.icon}
        />
      ) : null}
      <TextInput
        onLayout={() => {
          if (value) {
            borderColor.value = withTiming(1);
            color.value = withTiming(1);
            paddingVertical.value = 8;
            fontSize.value = 12;
          }
        }}
        onFocus={() => {
          borderColor.value = withTiming(1);
          color.value = withTiming(1);
          paddingVertical.value = 8;
          fontSize.value = 12;
        }}
        onBlur={() => {
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
        editable={editable}
      />
    </Animated.View>
  );
};

export default CustomInput;
