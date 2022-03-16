import React, {Dispatch, SetStateAction, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';
import useThemedStyled from '../../themes/useThemedStyles';
import useTheme from '../../themes/useTheme';
import {Colors} from '../../types/colors';

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const CustomInput = (props: CustomInputProps) => {
  const theme = useTheme() as Colors;
  const style = useThemedStyled(styles);

  const [focus, setFocus] = useState(false);

  return (
    <View style={style.wrap}>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => (!props.value ? setFocus(false) : null)}
        placeholderTextColor={theme.colors.PLACEHOLDER}
        style={[focus ? style.focusInput : style.idleInput, style.textInput]}
        {...props}
      />
      <Text style={[focus ? style.focusLabel : style.idleLabel, style.label]}>
        {props.label}
      </Text>
    </View>
  );
};

export default CustomInput;
