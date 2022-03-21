import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  calendar: {
    width: 284,
    minHeight: 248,
    margin: 20,
    backgroundColor: '#141419',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#141419',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  month: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBack: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthName: {
    width: 180,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthNameText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#DADADA',
  },
  buttonNext: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weeks: {
    width: '100%',
    flexDirection: 'row',
  },
  dayWeek: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayWeekText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#575767',
  },
  days: {
    width: '100%',
    justifyContent: 'space-between',
  },
  day: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
  },
  dayText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 22,
    color: '#DADADA',
  },
  highlight: {
    backgroundColor: '#1294F2',
    borderRadius: 18,
  },
  pressed: {
    borderColor: '#1294F2',
    borderRadius: 18,
    borderWidth: 1,
  },
  unfocused: {
    opacity: 0.35,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
});

export default styles;
