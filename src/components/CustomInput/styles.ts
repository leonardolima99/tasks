import {StyleSheet} from 'react-native';
import {Colors} from '../../types/colors';

const styles = (theme: Colors) =>
  StyleSheet.create({
    wrap: {
      marginBottom: 16,
      position: 'relative',
      borderBottomWidth: 2,
      bottom: -0.5, // para simular o borderBottom do input
    },
    label: {
      position: 'absolute',
      paddingHorizontal: 16,
    },
    textInput: {
      backgroundColor: theme.colors.BACKGROUND_SECONDARY,
      color: theme.colors.INPUT_TEXT,
      fontSize: 14,
      paddingHorizontal: 16,
      paddingTop: 30,
      paddingBottom: 8,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    idleInput: {
      borderColor: theme.colors.INPUT_BORDER,
    },
    focusInput: {
      borderColor: theme.colors.PRIMARY,
    },
    idleLabel: {
      color: theme.colors.PLACEHOLDER,
      paddingVertical: 23,
      fontSize: 14,
    },
    focusLabel: {
      color: theme.colors.PRIMARY,
      fontSize: 12,
      paddingVertical: 8,
    },
  });

export default styles;
