import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../../types/colors';

const styles = (theme: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Number(StatusBar.currentHeight),
      backgroundColor: theme.colors.BACKGROUND,
    },
    scroll: {
      paddingHorizontal: 16,
    },
    header: {
      marginTop: 32,
      marginBottom: 16,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.DIVIDER,
    },
    title: {
      color: theme.colors.TITLE,
      fontSize: 32,
      lineHeight: 32,
      marginBottom: 8,
      marginTop: 16,
      fontFamily: 'Inter-SemiBold',
    },
    textInput: {
      backgroundColor: theme.colors.BACKGROUND_SECONDARY,
      color: theme.colors.INPUT_TEXT,
      fontSize: 14,
      /* height: 58, */
      paddingHorizontal: 16,
      //paddingVertical: 20,
      paddingVertical: 19,
      borderBottomWidth: 2,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderColor: theme.colors.INPUT_BORDER,
      marginBottom: 16,
    },
  });

export default styles;
