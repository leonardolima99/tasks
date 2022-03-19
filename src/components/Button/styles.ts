import {StyleSheet} from 'react-native';

import {Colors} from '../../types/colors';

const styles = (theme: Colors) =>
  StyleSheet.create({
    opacity: {
      opacity: 0.8,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    plus: {
      position: 'absolute',
      height: 56,
      width: 56,
      backgroundColor: theme.colors.PRIMARY,
      borderRadius: 28,
      shadowColor: theme.colors.PRIMARY,
      elevation: 4,
      bottom: 16,
      right: 16,
    },
    add: {
      backgroundColor: theme.colors.PRIMARY,
      borderRadius: 4,
      flexDirection: 'row',
    },
    vertical: {
      position: 'absolute',
      width: 2,
      height: 16,
      backgroundColor: theme.colors.BUTTON_TEXT,
      zIndex: 1,
    },
    horizontal: {
      width: 16,
      height: 2,
      backgroundColor: theme.colors.BUTTON_TEXT,
      zIndex: 0.5,
    },
    disabled: {
      backgroundColor: '#B9B9BE90',
      opacity: 0.3,
    },
    back: {
      width: 'auto',
      flexDirection: 'row',
      alignSelf: 'flex-start',
      paddingVertical: 5,
      paddingLeft: 8,
      paddingRight: 16,
    },
    buttonText: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 15,
      color: theme.colors.BUTTON_TEXT,
    },
    spacing: {
      paddingLeft: 8,
    },
    primary: {
      color: theme.colors.PRIMARY,
    },
  });

export default styles;
