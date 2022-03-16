import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useTranslation} from 'react-i18next';

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';

import Button from '../../components/Button';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';
import CustomInput from '../../components/CustomInput';

const NewTask = ({navigation}: StackScreenProps<RootStackParamList>) => {
  const style = useThemedStyles(styles);

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

  const {t} = useTranslation('new_task');

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scroll}>
        <View style={style.header}>
          <Button type="back" onPress={handleNavigateToBack} />
          <Text style={style.title}>{t('title')}</Text>
        </View>
        <CustomInput
          label={t('ph_title')}
          value={title}
          onChangeText={setTitle}
        />
        <CustomInput
          label={t('ph_category')}
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
