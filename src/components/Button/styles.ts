import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.8,
  },
  button: {
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  plus: {
    position: 'absolute',
    width: 58,
    backgroundColor: '#3F4EA0',
    borderRadius: 29,
    shadowColor: '#3F4EA0',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 8,
    elevation: 8,
    bottom: 16,
    right: 16,
  },
  add: {
    width: '100%',
    backgroundColor: '#3F4EA0',
    borderRadius: 29,
    flexDirection: 'row',
  },
  spacing: {
    paddingRight: 8,
  },
  disabled: {
    backgroundColor: '#B9B9BE90',
  },
  back: {
    width: 15,
    height: 40,
    alignSelf: 'flex-start',
    backgroundColor: '#F8F8F8',
  },
  higher: {
    position: 'absolute',
    width: 2,
    height: 20,
    borderRadius: 1,
    backgroundColor: '#3F4EA0',
    transform: [{translateY: 6.5}, {rotate: '-45deg'}],
  },
  bottom: {
    position: 'absolute',
    width: 20,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#3F4EA0',
    transform: [{translateY: -6.5}, {rotate: '-45deg'}],
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
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
});

export default styles;
