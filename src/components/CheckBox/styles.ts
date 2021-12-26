import {StyleSheet} from 'react-native';

const light = StyleSheet.create({
  check: {
    borderColor: '#DADADA',
  },
  background: {
    backgroundColor: '#FAFAFA',
  },
  smaller: {
    backgroundColor: '#575767',
  },
  larger: {
    backgroundColor: '#575767',
  },
});

const dark = StyleSheet.create({
  check: {
    borderColor: '#0E0E11',
  },
  background: {
    backgroundColor: '#292B35',
  },
  smaller: {
    backgroundColor: '#AFAFAF',
  },
  larger: {
    backgroundColor: '#AFAFAF',
  },
});

const styles = StyleSheet.create({
  check: {
    position: 'relative',
    marginTop: 2,
    marginRight: 16,
    width: 24,
    height: 24,
    borderWidth: 2,
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
    transform: [{rotate: '-30deg'}, {translateX: -3.4}, {translateY: 1.2}],
  },
  larger: {
    position: 'absolute',
    zIndex: 2,
    width: 2,
    height: 12,
    borderRadius: 1,
    transform: [{rotate: '30deg'}, {translateX: 1.2}, {translateY: -0.6}],
  },
  opacity: {
    opacity: 0.2,
  },
});

export {styles, dark, light};
