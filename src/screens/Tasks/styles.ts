import {StyleSheet, StatusBar} from 'react-native';

/* const theme = useColorScheme(); */

const light = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
  },
  header: {
    borderBottomColor: 'rgba(208, 208, 208, 0.2)',
  },
  title: {
    color: '#0E0E11',
  },
  subTitle: {
    color: '#575767',
  },
  status: {
    color: '#575767',
  },
  titleTask: {
    color: '#575767',
  },
  titleTaskComplete: {
    color: '#B9B9BE',
  },
  categoryTask: {
    color: '#B9B9BE',
  },
});

const dark = StyleSheet.create({
  container: {
    backgroundColor: '#141419',
  },
  header: {
    borderBottomColor: 'rgba(87, 87, 103, 0.2)',
  },
  title: {
    color: '#DADADA',
  },
  subTitle: {
    color: '#575767',
  },
  status: {
    color: '#EBEBEB',
  },
  titleTask: {
    color: '#DADADA',
  },
  titleTaskComplete: {
    color: '#575767',
  },
  categoryTask: {
    color: '#575767',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Number(StatusBar.currentHeight),
  },
  scroll: {
    paddingHorizontal: 16,
  },
  header: {
    borderBottomWidth: 2,
    marginTop: 32,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
  },
  subTitle: {
    marginBottom: 16,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  tasks: {
    marginBottom: 32,
  },
  status: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    marginBottom: 6,
  },
  boxTask: {
    marginTop: 12,
    flexDirection: 'row',
  },
  titleTask: {
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
  },
  titleTaskComplete: {
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
  },
  categoryTask: {
    fontFamily: 'Inter-SemiBold',
    marginTop: 4,
  },
});

export {styles, dark, light};
