import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import setupCalendar, {
  DayArrayProps,
  DaysProps,
} from '../../utils/setupCalendar';

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';
import useTheme from '../../themes/useTheme';
import {Colors} from '../../types/colors';

type Props = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

type CalendarProps = {
  header: string;
  weekNames: string[];
  days: DaysProps;
};

type DateProps = {
  item: DayArrayProps;
};

const Datepicker = ({modalVisible, setModalVisible, date, setDate}: Props) => {
  const style = useThemedStyles(styles);
  const theme = useTheme() as Colors;

  const [calendar, setCalendar] = useState<CalendarProps>();
  const [navMonth, setNavMonth] = useState(date || new Date());
  const [mark, setMark] = useState<number[]>([0, 0, 0]);
  const [realy, setRealy] = useState(false);

  const getCalendar = async (value: Date) => {
    setRealy(false);
    const dateTemp = value;
    const temp = await setupCalendar(dateTemp);
    setCalendar(temp);
    setRealy(true);
  };

  /* const handleMonth = async (next: boolean) => {
    // Soma 1 mês se o next for verdadeiro, se falso subtrai 1
    navMonth.setMonth(navMonth.getMonth() + (next ? +1 : -1));
    setNavMonth(new Date(navMonth));
    const temp = await setupCalendar(navMonth);
    setCalendar(temp);
  }; */

  const handleBackMonth = async () => {
    setRealy(false);
    navMonth.setMonth(navMonth.getMonth() - 1);
    setNavMonth(new Date(navMonth));
    const temp = await setupCalendar(navMonth);
    setCalendar(temp);
    setRealy(true);
  };

  const handleNextMonth = async () => {
    setRealy(false);
    navMonth.setMonth(navMonth.getMonth() + 1);
    setNavMonth(new Date(navMonth));
    const temp = await setupCalendar(navMonth);
    setCalendar(temp);
    setRealy(true);
  };

  const handleTodayDate = async () => {
    setRealy(false);
    const today = new Date();
    setDate(today);
    setMark([today.getDate(), today.getMonth(), today.getFullYear()]);
    setRealy(true);
  };

  useEffect(() => {
    if (date && modalVisible) {
      setNavMonth(new Date(date));
    }
    getCalendar(date || new Date());
    console.log('asas', date);
  }, [date, modalVisible]);

  const renderDay = ({item}: DateProps) => {
    const [day, month, year] = [item.day, item.month, item.year];

    return (
      <Pressable
        onPress={() => {
          setRealy(false);
          setDate(new Date(year, month, day));
          console.log(date);
          setModalVisible(false);
          setMark([day, month, year]);
          setRealy(true);
        }}
        style={({pressed}) => [
          style.day,
          item.highlight ? style.highlight : null,
          pressed ? style.pressed : null,
          mark[0] === day && mark[1] === month && mark[2] === year
            ? style.pressed
            : null,
        ]}>
        <Text
          style={[
            style.dayText,
            item.unfocused ? style.unfocused : null,
            item.highlight ? style.textHighlight : null,
          ]}>
          {day}
        </Text>
      </Pressable>
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(false);
      }}>
      <StatusBar
        animated={true}
        showHideTransition={'fade'}
        translucent={true}
        backgroundColor={theme.colors.BACKGROUND_TRANSPARENT}
      />
      <Pressable
        style={style.centeredView}
        onPress={() => setModalVisible(false)}>
        <View style={style.calendar}>
          {realy ? (
            <>
              <View style={style.month}>
                <Pressable style={style.buttonBack} onPress={handleBackMonth}>
                  <Icon
                    name="chevron-left"
                    size={24}
                    color={theme.colors.TITLE}
                  />
                </Pressable>
                <Pressable style={style.monthName} onPress={handleTodayDate}>
                  <Text style={style.monthNameText}>{calendar?.header}</Text>
                </Pressable>
                <Pressable style={style.buttonNext} onPress={handleNextMonth}>
                  <Icon
                    name="navigate-next"
                    size={24}
                    color={theme.colors.TITLE}
                  />
                </Pressable>
              </View>
              <View style={style.weeks}>
                {calendar?.weekNames.map((item, index) => (
                  <View style={style.dayWeek} key={index}>
                    <Text style={style.dayWeekText}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={style.days}>
                <FlatList
                  data={calendar?.days}
                  renderItem={renderDay}
                  keyExtractor={item =>
                    String(item.day + item.month + item.year)
                  }
                  numColumns={7}
                />
              </View>
            </>
          ) : (
            <ActivityIndicator size="large" color={theme.colors.TITLE} />
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

export default Datepicker;
