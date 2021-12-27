import {StyleSheet, StatusBar} from 'react-native';

const light = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
  },
  title: {
    color: '#0E0E11',
  },
  textInput: {
    color: '#575767',
    borderColor: '#B9B9BE',
  },
});

const dark = StyleSheet.create({
  container: {
    backgroundColor: '#141419',
  },
  title: {
    color: '#DADADA',
  },
  textInput: {
    color: '#B9B9BE',
    borderColor: '#575767',
  },
});

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

export {styles, dark, light};
