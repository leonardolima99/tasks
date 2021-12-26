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

const GetSubTitle = ({tasks}: GetSubTitleProps) => {
  let message = [];
  const incomplete = tasks.filter(item => item.complete === false).length;
  const complete = tasks.filter(item => item.complete === true).length;

  if (tasks.length) {
    if (incomplete > 0 && complete > 0) {
      message.push(`${incomplete} incomplete, ${complete} complete`);
    } else if (incomplete > 0) {
      message.push(`${incomplete} incomplete`);
    } else if (complete > 0) {
      message.push(`${complete} complete`);
    }
  } else {
    message.push('No tasks today.');
  }

  return <Text>{message[0]}</Text>;
};

const Tasks = ({navigation}: Props) => {
  const [tasks, setTasks] = useState([] as TasksProps);

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
              Incomplete
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
              Complete
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
