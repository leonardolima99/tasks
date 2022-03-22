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
          styles.day,
          item.highlight ? styles.highlight : null,
          pressed ? styles.pressed : null,
          mark[0] === day && mark[1] === month && mark[2] === year
            ? styles.pressed
            : null,
        ]}>
        <Text
          style={[styles.dayText, item.unfocused ? styles.unfocused : null]}>
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
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0.7)"
      />
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(false)}>
        <View style={styles.calendar}>
          {realy ? (
            <>
              <View style={styles.month}>
                <Pressable style={styles.buttonBack} onPress={handleBackMonth}>
                  <Icon name="chevron-left" size={24} color={'#DADADA'} />
                </Pressable>
                <Pressable style={styles.monthName} onPress={handleTodayDate}>
                  <Text style={styles.monthNameText}>{calendar?.header}</Text>
                </Pressable>
                <Pressable style={styles.buttonNext} onPress={handleNextMonth}>
                  <Icon name="navigate-next" size={24} color={'#DADADA'} />
                </Pressable>
              </View>
              <View style={styles.weeks}>
                {calendar?.weekNames.map((item, index) => (
                  <View style={styles.dayWeek} key={index}>
                    <Text style={styles.dayWeekText}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.days}>
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
            <ActivityIndicator size="large" color={'#dadada'} />
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

export default Datepicker;
