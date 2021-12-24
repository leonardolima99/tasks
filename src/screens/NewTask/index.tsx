import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import Button from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';

const NewTask = ({navigation}: StackScreenProps<RootStackParamList>) => {
  const [title, setTitle] = useState('' as string);
  const [category, setCategory] = useState('' as string);
  const [loading, setLoading] = useState(false);

  const handleNavigateToBack = () => {
    navigation.goBack();
  };

  const handleAddTask = async () => {
    if (title && category) {
      setLoading(true);
      let date = new Date();
      let dateNow = date.setMinutes(
        date.getMinutes() - date.getTimezoneOffset(),
      );
      await firestore()
        .collection('Tasks')
        .add({
          title,
          category,
          complete: false,
          date: new Date(dateNow),
        });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Button type="back" onPress={handleNavigateToBack} />
          <Text style={styles.title}>Add Task</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          placeholderTextColor="#B9B9BE"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Category"
          placeholderTextColor="#B9B9BE"
          value={category}
          onChangeText={setCategory}
        />
        {!loading ? (
          <Button type="add" onPress={handleAddTask} />
        ) : (
          <Button type="add" disabled>
            <ActivityIndicator />
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewTask;
