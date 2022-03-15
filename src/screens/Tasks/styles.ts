import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Number(StatusBar.currentHeight),
    backgroundColor: '#F8F8F8',
  },
  scroll: {
    paddingHorizontal: 16,
  },
  header: {
    borderBottomWidth: 2,
    marginTop: 32,
    marginBottom: 16,
    borderBottomColor: 'rgba(208, 208, 208, 0.2)',
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
    color: '#0E0E11',
  },
  subTitle: {
    marginBottom: 16,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#575767',
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
    color: '#575767',
  },
  titleTaskComplete: {
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
    color: '#B9B9BE',
  },
  categoryTask: {
    fontFamily: 'Inter-SemiBold',
    marginTop: 4,
    color: '#B9B9BE',
  },
});

export default styles;
