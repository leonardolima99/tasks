import React from 'react';
import {View, Pressable, Text} from 'react-native';

import {useTranslation} from 'react-i18next';

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';

type ButtonProps = {
  type: string;
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({type, onPress, disabled, children}: ButtonProps) => {
  const style = useThemedStyles(styles);

  const {t} = useTranslation('new_task');

  if (type === 'plus') {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [
          pressed ? style.opacity : null,
          style.button,
          style.plus,
        ]}>
        <View style={style.vertical} />
        <View style={style.horizontal} />
      </Pressable>
    );
  } else if (type === 'add') {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [
          pressed ? style.opacity : null,
          style.button,
          style.add,
          disabled ? style.disabled : null,
        ]}>
        <Text style={[style.buttonText, children ? style.spacing : null]}>
          {t('button_add')}
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
          pressed ? style.opacity : null,
          style.button,
          style.back,
        ]}>
        <View style={style.higher} />
        <View style={style.bottom} />
      </Pressable>
    );
  }

  return null;
};

export default Button;
