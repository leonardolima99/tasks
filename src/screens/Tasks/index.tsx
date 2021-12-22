import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';

import styles from './styles';

const Tasks = () => {
  const list = [
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
      title: 'Submit 2019 tax return',
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
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>March 9, 2020</Text>
          <Text style={styles.subTitle}>5 incomplete, 5 completed</Text>
        </View>
        <View style={styles.tasks}>
          <Text style={styles.status}>Incomplete</Text>
          {list.map(item => {
            return !item.complete ? (
              <View style={styles.boxTask} key={item.id}>
                <Text style={styles.check}>[ &nbsp; ]</Text>
                <View style={styles.textTask}>
                  <Text style={styles.titleTask}>{item.title}</Text>
                  <Text style={styles.categoryTask}>{item.category}</Text>
                </View>
              </View>
            ) : null;
          })}
        </View>
        <View style={styles.tasks}>
          <Text style={styles.status}>Completed</Text>
          {list.map(item => {
            return item.complete ? (
              <View style={styles.boxTask} key={item.id}>
                <Text style={styles.check}>[ x ]</Text>
                <View style={styles.textTask}>
                  <Text style={styles.titleTaskCompleted}>{item.title}</Text>
                </View>
              </View>
            ) : null;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
