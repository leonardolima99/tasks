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
      flexDirection: 'row',
    },
    loading: {
      paddingRight: 16,
      paddingLeft: 12,
      paddingVertical: 8,
    },
    noIcon: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    withIcon: {
      paddingVertical: 8,
      paddingLeft: 8,
      paddingRight: 16,
    },
    onlyIcon: {
      padding: 16,
    },
    disabled: {
      backgroundColor: '#B9B9BE90',
      opacity: 0.3,
    },
    rectangular: {
      borderRadius: 4,
    },
    round: {
      borderRadius: 50,
    },
    buttonText: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 15,
    },
    spacing: {
      paddingLeft: 8,
    },
    outlined: {
      borderWidth: 2,
    },
    outlinePrimary: {
      borderColor: theme.colors.PRIMARY,
    },
    outlineDanger: {
      borderColor: theme.colors.DANGER,
    },
    backgroundPrimary: {
      backgroundColor: theme.colors.PRIMARY,
    },
    backgroundDanger: {
      backgroundColor: theme.colors.DANGER,
    },
    text: {
      color: theme.colors.BUTTON_TEXT,
    },
    primary: {
      color: theme.colors.PRIMARY,
    },
    danger: {
      color: theme.colors.DANGER,
    },
    start: {
      alignSelf: 'flex-start',
    },
    center: {
      alignSelf: 'center',
    },
    end: {
      alignSelf: 'flex-end',
    },
  });

export default styles;
