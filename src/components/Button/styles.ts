import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.8,
  },
  add: {
    position: 'absolute',
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#3F4EA0',
    shadowColor: '#3F4EA0',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 8,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    bottom: 16,
    right: 16,
  },
  vertical: {
    position: 'absolute',
    width: 2,
    height: 20,
    backgroundColor: '#FFF',
    zIndex: 1,
  },
  horizontal: {
    width: 20,
    height: 2,
    backgroundColor: '#FFF',
    zIndex: 0.5,
  },
});

export default styles;
