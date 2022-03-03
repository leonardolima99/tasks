import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  useColorScheme,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {styles, light, dark} from './styles';

import CheckBox from '../../components/CheckBox';
import DateFormat from '../../components/DateFormat';
import Button from '../../components/Button';

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
  const [tasks, setTasks] = useState([] as TasksProps);

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

  const theme = useColorScheme() as string;

  return (
    <SafeAreaView
      style={[
        styles.container,
        theme === 'dark' ? dark.container : light.container,
      ]}>
      <ScrollView style={styles.scroll}>
        <View
          style={[
            styles.header,
            theme === 'dark' ? dark.header : light.header,
          ]}>
          <Text
            style={[styles.title, theme === 'dark' ? dark.title : light.title]}>
            <DateFormat d={new Date()} type="string" />
          </Text>
          <Text
            style={[
              styles.subTitle,
              theme === 'dark' ? dark.subTitle : light.subTitle,
            ]}>
            <GetSubTitle tasks={tasks} />
          </Text>
        </View>
        {tasks.filter(item => item.complete === false).length > 0 ? (
          <View style={styles.tasks}>
            <Text
              style={[
                styles.status,
                theme === 'dark' ? dark.status : light.status,
              ]}>
              {t('incomplete', {count: getIncompleteCount(tasks)})}
            </Text>
            {tasks.map(item =>
              !item.complete ? (
                <View style={styles.boxTask} key={item.id}>
                  <CheckBox
                    isChecked={item.complete}
                    onPress={() => handleCheckItem(item.id, !item.complete)}
                  />
                  <View>
                    <Text
                      style={[
                        styles.titleTask,
                        theme === 'dark' ? dark.titleTask : light.titleTask,
                      ]}>
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.categoryTask,
                        theme === 'dark'
                          ? dark.categoryTask
                          : light.categoryTask,
                      ]}>
                      {item.category}
                    </Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        ) : null}
        {tasks.filter(item => item.complete === true).length > 0 ? (
          <View style={styles.tasks}>
            <Text
              style={[
                styles.status,
                theme === 'dark' ? dark.status : light.status,
              ]}>
              {t('complete', {count: getCompleteCount(tasks)})}
            </Text>
            {tasks.map(item =>
              item.complete ? (
                <View style={styles.boxTask} key={item.id}>
                  <CheckBox isChecked={item.complete} disabled />
                  <View>
                    <Text
                      style={[
                        styles.titleTaskComplete,
                        theme === 'dark'
                          ? dark.titleTaskComplete
                          : light.titleTaskComplete,
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        ) : null}
      </ScrollView>
      <Button type="plus" onPress={handleNavigateToNewTask} />
    </SafeAreaView>
  );
};

export default Tasks;
