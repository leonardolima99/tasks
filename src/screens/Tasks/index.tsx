import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';

import CheckBox from '../../components/CheckBox';
import DateFormat from '../../components/DateFormat';

type TasksProps = {
  id: string;
  title: string;
  category: string;
  complete: boolean;
}[];

const Tasks = () => {
  const tasksCollection = firestore().collection('Tasks');

  /* let list = [
    {
      id: 1,
      title: 'Upload 1099-R to TurboTax',
      category: '💰 Finance',
      complete: false,
    },
    {
      id: 2,
      title: 'Submit 2019 tax return',
      category: '💰 Finance',
      complete: false,
    },
    {
      id: 3,
      title: 'Print parking passes',
      category: '💞 Wedding',
      complete: false,
    },
    {
      id: 4,
      title: 'Sign contract, send back',
      category: '🖥️ Freelance',
      complete: false,
    },
    {
      id: 5,
      title: 'Hand sanitizer',
      category: '🛒 Shopping List',
      complete: false,
    },
    {
      id: 6,
      title: 'Check on FedEx Order',
      category: '💰 Finance',
      complete: true,
    },
    {
      id: 7,
      title: 'Look at new plugins',
      category: '🖥️ Freelance',
      complete: true,
    },
    {
      id: 8,
      title: 'Respond to catering company',
      category: '💰 Finance',
      complete: true,
    },
    {
      id: 9,
      title: 'Reschedule morning coffee',
      category: '💞 Wedding',
      complete: true,
    },
    {
      id: 10,
      title: 'Check the latest on Community',
      category: '💞 Wedding',
      complete: true,
    },
  ]; */

  const [tasks, setTasks] = useState([] as TasksProps);

  const handleCheckItem = async (id: string, check: boolean) => {
    // Importante para funcionar, criar uma variável auxiliar
    /* const temp_tasks = [...tasks];
    temp_tasks[id].complete = check;

    setTasks(temp_tasks); */
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
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>
            <DateFormat />
          </Text>
          <Text style={styles.subTitle}>
            {tasks.filter(item => item.complete === false).length} incomplete,
            &nbsp;
            {tasks.filter(item => item.complete === true).length} completed
          </Text>
        </View>
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
        <View style={styles.tasks}>
          <Text style={styles.status}>Completed</Text>
          {tasks.map(item =>
            item.complete ? (
              <View style={styles.boxTask} key={item.id}>
                <CheckBox isChecked={item.complete} disabled />
                <View style={styles.textTask}>
                  <Text style={styles.titleTaskCompleted}>{item.title}</Text>
                </View>
              </View>
            ) : null,
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
