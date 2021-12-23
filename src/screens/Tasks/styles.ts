import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Number(StatusBar.currentHeight),
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    borderBottomColor: 'rgba(208, 208, 208, 0.2)',
    borderBottomWidth: 2,
    marginTop: 32,
    marginBottom: 16,
  },
  title: {
    color: '#0E0E11',
    fontSize: 32,
    marginBottom: 8,
    fontWeight: '700',
  },
  subTitle: {
    color: '#575767',
    marginBottom: 16,
    fontSize: 14,
    fontWeight: '600',
  },
  tasks: {
    marginBottom: 32,
  },
  status: {
    fontSize: 18,
    fontWeight: '700',
    color: '#575767',
    marginBottom: 6,
  },
  boxTask: {
    marginTop: 12,
    flexDirection: 'row',
  },
  textTask: {},
  titleTask: {
    color: '#575767',
    fontWeight: '500',
    lineHeight: 24,
  },
  titleTaskCompleted: {
    color: '#B9B9BE',
    fontWeight: '500',
    lineHeight: 24,
  },
  categoryTask: {
    color: '#B9B9BE',
    fontWeight: '600',
    marginTop: 4,
  },
  button: {},
});

export default styles;
