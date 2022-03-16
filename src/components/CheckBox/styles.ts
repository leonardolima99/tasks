import {StyleSheet} from 'react-native';
import {Colors} from '../../types/colors';

const styles = (theme: Colors) =>
  StyleSheet.create({
    check: {
      backgroundColor: theme.colors.BACKGROUND_TERTIARY,
      position: 'relative',
      marginTop: 2,
      marginRight: 16,
      width: 24,
      height: 24,
      borderWidth: 2,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.colors.BORDER,
    },
    smaller: {
      position: 'absolute',
      zIndex: 1,
      width: 2,
      height: 6,
      borderRadius: 1,
      transform: [{rotate: '-30deg'}, {translateX: -3.4}, {translateY: 1.2}],
      backgroundColor: theme.colors.TEXT,
    },
    larger: {
      position: 'absolute',
      zIndex: 2,
      width: 2,
      height: 12,
      borderRadius: 1,
      transform: [{rotate: '30deg'}, {translateX: 1.2}, {translateY: -0.6}],
      backgroundColor: theme.colors.TEXT,
    },
    opacity: {
      opacity: 0.2,
    },
  });

export default styles;
