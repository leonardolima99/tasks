import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* import {useTranslation} from 'react-i18next'; */

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';
import useTheme from '../../themes/useTheme';
import {Colors} from '../../types/colors';

type ButtonProps = {
  onPress?: () => void;
  type: 'containered' | 'outline' | 'text';
  form: 'rectangular' | 'round';
  color: 'primary' | 'danger';
  align: 'start' | 'center' | 'end';
  iconName?: string;
  onlyIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};

const Button = ({
  type,
  form,
  iconName,
  onlyIcon,
  color,
  align,
  onPress,
  disabled,
  loading,
  children,
}: ButtonProps) => {
  const style = useThemedStyles(styles);
  const theme = useTheme() as Colors;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        style.button,
        pressed ? style.opacity : null,
        disabled ? style.disabled : null,
        !iconName ? style.noIcon : null,
        loading ? style.loading : null,
        !onlyIcon && iconName ? style.withIcon : null,
        onlyIcon && iconName ? style.onlyIcon : null,
        form === 'rectangular' ? style.rectangular : style.round,
        type === 'outline' ? style.outlined : null,
        type === 'outline' && color === 'primary' ? style.outlinePrimary : null,
        type === 'outline' && color === 'danger' ? style.outlineDanger : null,
        type === 'containered' && color === 'primary'
          ? style.backgroundPrimary
          : null,
        type === 'containered' && color === 'danger'
          ? style.backgroundDanger
          : null,
        align === 'start' ? style.start : null,
        align === 'center' ? style.center : null,
        align === 'end' ? style.end : null,
      ]}>
      {loading ? <ActivityIndicator color={theme.colors.BUTTON_TEXT} /> : null}
      {iconName ? (
        <Icon
          name={iconName}
          color={
            type === 'containered'
              ? theme.colors.BUTTON_TEXT
              : color === 'primary'
              ? theme.colors.PRIMARY
              : theme.colors.DANGER
          }
          size={24}
        />
      ) : null}
      {children ? (
        <Text
          style={[
            style.buttonText,
            type === 'containered'
              ? style.text
              : color === 'primary'
              ? style.primary
              : style.danger,
            iconName || loading ? style.spacing : null,
          ]}>
          {children}
        </Text>
      ) : null}
    </Pressable>
  );
};

export default Button;
