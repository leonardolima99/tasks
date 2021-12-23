import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';

import CheckBox from '../../components/CheckBox';
import DateFormat from '../../components/DateFormat';
import Button from '../../components/Button';

type TasksProps = {
  id: string;
  title: string;
  category: string;
  complete: boolean;
}[];

type GetSubTitleProps = {
  tasks: TasksProps;
};

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

const Tasks = () => {
  const [tasks, setTasks] = useState([] as TasksProps);

  const handleCheckItem = async (id: string, check: boolean) => {
    await firestore().collection('Tasks').doc(id).update({complete: check});
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('Tasks')
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>
            <DateFormat />
          </Text>
          <Text style={styles.subTitle}>
            <GetSubTitle tasks={tasks} />
          </Text>
        </View>
        {tasks.filter(item => item.complete === false).length > 0 ? (
          <View style={styles.tasks}>
            <Text style={styles.status}>Incomplete</Text>
            {tasks.map(item =>
              !item.complete ? (
                <View style={styles.boxTask} key={item.id}>
                  <CheckBox
                    isChecked={item.complete}
                    onPress={() => handleCheckItem(item.id, !item.complete)}
                  />
                  <View style={styles.textTask}>
                    <Text style={styles.titleTask}>{item.title}</Text>
                    <Text style={styles.categoryTask}>{item.category}</Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        ) : null}
        {tasks.filter(item => item.complete === true).length > 0 ? (
          <View style={styles.tasks}>
            <Text style={styles.status}>Complete</Text>
            {tasks.map(item =>
              item.complete ? (
                <View style={styles.boxTask} key={item.id}>
                  <CheckBox isChecked={item.complete} disabled />
                  <View style={styles.textTask}>
                    <Text style={styles.titleTaskComplete}>{item.title}</Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        ) : null}
      </ScrollView>
      <Button type="add" />
    </SafeAreaView>
  );
};

export default Tasks;
