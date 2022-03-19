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
      borderBottomWidth: 2,
      marginTop: 32,
      marginBottom: 16,
      borderBottomColor: theme.colors.DIVIDER,
    },
    title: {
      fontSize: 32,
      marginBottom: 8,
      fontFamily: 'Inter-Bold',
      color: theme.colors.TITLE,
    },
    subTitle: {
      marginBottom: 16,
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.SUB_TITLE,
    },
    tasks: {
      marginBottom: 32,
    },
    status: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.STATUS,
    },
    boxTask: {
      marginTop: 16,
      flexDirection: 'row',
    },
    titleTask: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      lineHeight: 24,
      color: theme.colors.TEXT,
    },
    titleTaskComplete: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      lineHeight: 24,
      color: theme.colors.TEXT_SECONDARY,
    },
    categoryTask: {
      fontFamily: 'Inter-SemiBold',
      marginTop: 4,
      color: theme.colors.TEXT_SECONDARY,
    },
    floatingButtonRightBottom: {
      marginRight: 16,
      marginBottom: 16,
      alignSelf: 'flex-end',
    },
  });

export default styles;
