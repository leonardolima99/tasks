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
};

type CalendarProps = {
  header: string;
  weekNames: string[];
  days: DaysProps;
};

type DateProps = {
  item: DayArrayProps;
};

const DatePiker = ({modalVisible, setModalVisible}: Props) => {
  const [calendar, setCalendar] = useState<CalendarProps>();

  const getCalendar = async () => {
    const date = new Date();
    const temp = await setupCalendar(date);
    setCalendar(temp);
  };

  useEffect(() => {
    getCalendar();
  }, []);

  const renderDay = ({item}: DateProps) => (
    <Pressable style={[styles.day, item.highlight ? styles.highlight : null]}>
      <Text style={[styles.dayText, item.unfocused ? styles.unfocused : null]}>
        {item.day}
      </Text>
    </Pressable>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0.7)"
      />
      <View style={styles.centeredView}>
        <View style={styles.calendar}>
          <View style={styles.month}>
            <Pressable style={styles.buttonBack}>
              <Icon name="chevron-left" size={24} color={'#DADADA'} />
            </Pressable>
            <Pressable style={styles.monthName}>
              <Text style={styles.monthNameText}>{calendar?.header}</Text>
            </Pressable>
            <Pressable style={styles.buttonNext}>
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
              keyExtractor={item => String(item.day + item.month)}
              numColumns={7}
            />
          </View>
        </View>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text>Fechar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default DatePiker;
