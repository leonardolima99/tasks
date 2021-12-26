import {StyleSheet} from 'react-native';

const light = StyleSheet.create({
  title: {
    color: '#0E0E11',
  },
});

const dark = StyleSheet.create({
  title: {
    color: '#DADADA',
  },
});

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
  },
});

export {styles, dark, light};
