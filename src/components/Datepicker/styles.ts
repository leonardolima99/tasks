import {StyleSheet} from 'react-native';
import {Colors} from '../../types/colors';

const styles = (theme: Colors) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.BACKGROUND_TRANSPARENT,
    },
    calendar: {
      width: 284,
      minHeight: 248,
      margin: 20,
      backgroundColor: theme.colors.BACKGROUND,
      borderRadius: 8,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: theme.colors.BACKGROUND,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    month: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonBack: {
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    },
    monthName: {
      width: 180,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    },
    monthNameText: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
      color: theme.colors.TITLE,
    },
    buttonNext: {
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    },
    weeks: {
      width: '100%',
      flexDirection: 'row',
    },
    dayWeek: {
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dayWeekText: {
      fontFamily: 'Inter-Medium',
      fontSize: 10,
      color: theme.colors.TEXT_SECONDARY,
    },
    days: {
      width: '100%',
      justifyContent: 'space-between',
    },
    day: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
    },
    dayText: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      lineHeight: 22,
      color: theme.colors.TITLE,
    },
    highlight: {
      backgroundColor: theme.colors.PRIMARY,
      borderRadius: 18,
    },
    textHighlight: {
      color: theme.colors.BUTTON_TEXT,
    },
    pressed: {
      borderColor: theme.colors.PRIMARY,
      borderRadius: 18,
      borderWidth: 1,
    },
    unfocused: {
      opacity: 0.35,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
  });

export default styles;
