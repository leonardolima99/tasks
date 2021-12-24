import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    backgroundColor: '#575767',
    transform: [{rotate: '-30deg'}, {translateX: -3.4}, {translateY: 1.2}],
  },
  larger: {
    position: 'absolute',
    zIndex: 2,
    width: 2,
    height: 12,
    borderRadius: 1,
    backgroundColor: '#575767',
    transform: [{rotate: '30deg'}, {translateX: 1.2}, {translateY: -0.6}],
  },
  opacity: {
    opacity: 0.2,
  },
});

export default styles;
