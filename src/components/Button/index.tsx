import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTranslation} from 'react-i18next';

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';
import useTheme from '../../themes/useTheme';
import {Colors} from '../../types/colors';

type ButtonProps = {
  type: string;
  iconName?: string;
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({type, iconName, onPress, disabled, children}: ButtonProps) => {
  const style = useThemedStyles(styles);
  const theme = useTheme() as Colors;

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
        {children}
        <Text style={[style.buttonText, children ? style.spacing : null]}>
          {t('button_add')}
        </Text>
      </Pressable>
    );
  } else if (type === 'back') {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [pressed ? style.opacity : null, style.back]}>
        <Icon
          name={iconName || 'plus'}
          color={theme.colors.PRIMARY}
          size={24}
        />
        <Text style={[style.buttonText, style.spacing, style.primary]}>
          Voltar
        </Text>
      </Pressable>
    );
  }

  return null;
};

export default Button;
