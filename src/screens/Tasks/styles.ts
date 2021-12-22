import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32 + Number(StatusBar.currentHeight),
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    borderBottomColor: 'rgba(208, 208, 208, 0.2)',
    borderBottomWidth: 2,
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
  check: {
    position: 'relative',
    marginTop: 2,
    marginRight: 16,
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#DADADA',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smaller: {
    position: 'absolute',
    zIndex: 1,
    width: 2,
    height: 6,
    borderRadius: 1,
    backgroundColor: '#DADADA',
    transform: [{rotate: '-30deg'}, {translateX: -3.4}, {translateY: 1.2}],
  },
  larger: {
    position: 'absolute',
    zIndex: 2,
    width: 2,
    height: 12,
    borderRadius: 1,
    backgroundColor: '#DADADA',
    transform: [{rotate: '30deg'}, {translateX: 1.2}, {translateY: -0.6}],
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
