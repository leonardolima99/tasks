import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  Text,
  View,
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

  const getCalendar = async (value: Date) => {
    const temp = await setupCalendar(value);
    setCalendar(temp);
  };

  /* const handleMonth = async (next: boolean) => {
    // Soma 1 mês se o next for verdadeiro, se falso subtrai 1
    navMonth.setMonth(navMonth.getMonth() + (next ? +1 : -1));
    setNavMonth(new Date(navMonth));
    const temp = await setupCalendar(navMonth);
    setCalendar(temp);
  }; */

  const handleBackMonth = async () => {
    navMonth.setMonth(navMonth.getMonth() - 1);
    setNavMonth(new Date(navMonth));
    const temp = await setupCalendar(navMonth);
    setCalendar(temp);
  };

  const handleNextMonth = async () => {
    navMonth.setMonth(navMonth.getMonth() + 1);
    setNavMonth(new Date(navMonth));
    const temp = await setupCalendar(navMonth);
    setCalendar(temp);
  };

  const handleTodayDate = async () => {
    const today = new Date();
    setDate(today);
  };

  useEffect(() => {
    if (date && modalVisible) {
      setNavMonth(new Date(date));
    }

    getCalendar(date || new Date());
  }, [date, modalVisible]);

  const renderDay = ({item}: DateProps) => {
    const [day, month, year] = [item.day, item.month, item.year];

    return (
      <Pressable
        onPress={() => {
          setDate(new Date(year, month, day));
          setModalVisible(false);
          setMark([day, month, year]);
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
              <Pressable style={styles.dayWeek} key={index}>
                <Text style={styles.dayWeekText}>{item}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.days}>
            <FlatList
              data={calendar?.days}
              renderItem={renderDay}
              keyExtractor={item => String(item.day + item.month + item.year)}
              numColumns={7}
            />
          </View>
        </View>
        <Pressable>
          <Text>Fechar</Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default Datepicker;
