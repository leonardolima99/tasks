import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useTranslation} from 'react-i18next';

import {styles, dark, light} from './styles';
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
      await firestore().collection('Tasks').add({
        title,
        category,
        complete: false,
        date,
      });
      setLoading(false);
      handleNavigateToBack();
    }
  };

  const theme = useColorScheme();

  const {t} = useTranslation('new_task');

  return (
    <SafeAreaView
      style={[
        styles.container,
        theme === 'dark' ? dark.container : light.container,
      ]}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Button type="back" onPress={handleNavigateToBack} />
          <Text
            style={[styles.title, theme === 'dark' ? dark.title : light.title]}>
            {t('title')}
          </Text>
        </View>
        <TextInput
          style={[
            styles.textInput,
            theme === 'dark' ? dark.textInput : light.textInput,
          ]}
          placeholder={t('ph_title')}
          placeholderTextColor={theme === 'dark' ? '#575767' : '#B9B9BE'}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[
            styles.textInput,
            theme === 'dark' ? dark.textInput : light.textInput,
          ]}
          placeholder={t('ph_category')}
          placeholderTextColor={theme === 'dark' ? '#575767' : '#B9B9BE'}
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
