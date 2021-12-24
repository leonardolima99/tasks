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
    marginTop: 32,
    marginBottom: 16,
  },
  title: {
    color: '#0E0E11',
    fontSize: 32,
    marginBottom: 8,
    marginTop: 24,
    fontFamily: 'Inter-SemiBold',
  },
  titleTask: {
    color: '#575767',
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
  },
  titleTaskComplete: {
    color: '#B9B9BE',
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
  },
  categoryTask: {
    color: '#B9B9BE',
    fontFamily: 'Inter-SemiBold',
    marginTop: 4,
  },
  textInput: {
    color: '#575767',
    height: 58,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: '#B9B9BE',
    borderRadius: 29,
    marginBottom: 24,
  },
});

export default styles;
