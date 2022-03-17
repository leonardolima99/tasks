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
    spacing: {
      paddingLeft: 8,
    },
    disabled: {
      backgroundColor: '#B9B9BE90',
      opacity: 0.3,
    },
    back: {
      width: 15,
      height: 40,
      alignSelf: 'flex-start',
    },
    higher: {
      position: 'absolute',
      width: 2,
      height: 20,
      borderRadius: 1,
      backgroundColor: theme.colors.PRIMARY,
      transform: [{translateY: 6.5}, {rotate: '-45deg'}],
    },
    bottom: {
      position: 'absolute',
      width: 20,
      height: 2,
      borderRadius: 1,
      backgroundColor: theme.colors.PRIMARY,
      transform: [{translateY: -6.5}, {rotate: '-45deg'}],
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
    buttonText: {
      fontFamily: 'Inter-Bold',
      fontSize: 15,
      color: theme.colors.BUTTON_TEXT,
    },
  });

export default styles;
