import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';

import CheckBox from '../../components/CheckBox';
import DateFormat from '../../components/DateFormat';
import Button from '../../components/Button';
import DatePiker from '../../components/DatePiker';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';

import formatDate from '../../utils/formatDate';
import getDeviceLocale from '../../utils/getDeviceLocale';

import {useTranslation} from 'react-i18next';

type TasksProps = {
  id: string;
  title: string;
  category: string;
  complete: boolean;
}[];

type GetSubTitleProps = {
  tasks: TasksProps;
};

type Props = StackScreenProps<RootStackParamList>;

const getIncompleteCount = (value: TasksProps) => {
  return value.filter(item => item.complete === false).length;
};

const getCompleteCount = (value: TasksProps) => {
  return value.filter(item => item.complete === true).length;
};

const GetSubTitle = ({tasks}: GetSubTitleProps) => {
  const {t} = useTranslation('tasks');

  let message = [];
  const incomplete = getIncompleteCount(tasks);
  const complete = getCompleteCount(tasks);

  if (tasks.length) {
    if (incomplete > 0 && complete > 0) {
      message.push(
        `${incomplete} ${t('incomplete', {
          count: incomplete,
        }).toLowerCase()}, ${complete} ${t('complete', {
          count: complete,
        }).toLowerCase()}`,
      );
    } else if (incomplete > 0) {
      message.push(
        `${incomplete} ${t('incomplete', {
          count: incomplete,
        }).toLowerCase()}`,
      );
    } else if (complete > 0) {
      message.push(
        `${complete} ${t('complete', {count: complete}).toLowerCase()}`,
      );
    }
  } else {
    message.push(t('subtitle'));
  }

  return <Text>{message[0]}</Text>;
};

const Tasks = ({navigation}: Props) => {
  const style = useThemedStyles(styles);

  const [tasks, setTasks] = useState([] as TasksProps);
  const [modalVisible, setModalVisible] = useState(false);

  const {t} = useTranslation('tasks');

  const handleCheckItem = async (id: string, check: boolean) => {
    await firestore().collection('Tasks').doc(id).update({complete: check});
  };

  const handleNavigateToNewTask = () => {
    navigation.navigate('NewTask');
  };

  useEffect(() => {
    const {dateEnd, dateStart} = formatDate(
      new Date(),
      'filter',
      getDeviceLocale(),
      true,
      true,
    ) as {
      dateStart: Date;
      dateEnd: Date;
    };

    const subscriber = firestore()
      .collection('Tasks')
      .where('date', '>=', dateStart)
      .where('date', '<=', dateEnd)
      .onSnapshot(query => {
        const list: TasksProps = [];
        query.forEach(doc => {
          const {title, complete, category} = doc.data();
          list.push({
            id: doc.id,
            title,
            category,
            complete,
          });
        });
        setTasks(list);
      });

    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scroll}>
        <View style={style.header}>
          <Text
            style={[style.title]}
            onPress={() => setModalVisible(!modalVisible)}>
            <DateFormat d={new Date()} type="string" />
          </Text>
          <Text style={style.subTitle}>
            <GetSubTitle tasks={tasks} />
          </Text>
        </View>
        {tasks.filter(item => item.complete === false).length > 0 ? (
          <View style={style.tasks}>
            <Text style={style.status}>
              {t('incomplete', {count: getIncompleteCount(tasks)})}
            </Text>
            {tasks.map(item =>
              !item.complete ? (
                <View style={style.boxTask} key={item.id}>
                  <CheckBox
                    isChecked={item.complete}
                    onPress={() => handleCheckItem(item.id, !item.complete)}
                  />
                  <View>
                    <Text style={style.titleTask}>{item.title}</Text>
                    <Text style={style.categoryTask}>{item.category}</Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        ) : null}
        {tasks.filter(item => item.complete === true).length > 0 ? (
          <View style={style.tasks}>
            <Text style={style.status}>
              {t('complete', {count: getCompleteCount(tasks)})}
            </Text>
            {tasks.map(item =>
              item.complete ? (
                <View style={style.boxTask} key={item.id}>
                  <CheckBox isChecked={item.complete} disabled />
                  <View>
                    <Text style={style.titleTaskComplete}>{item.title}</Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        ) : null}

        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text style={style.title}>Abrir Modal</Text>
        </Pressable>
      </ScrollView>
      <View style={style.floatingButtonRightBottom}>
        <Button
          type="containered"
          form="round"
          iconName="add"
          onlyIcon
          color="primary"
          align="end"
          onPress={handleNavigateToNewTask}
        />
      </View>
      <DatePiker
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Tasks;
