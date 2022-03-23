import React, {useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useTranslation} from 'react-i18next';

import styles from './styles';
import useThemedStyles from '../../themes/useThemedStyles';

import Button from '../../components/Button';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';
import CustomInput from '../../components/CustomInput';
import Datepicker from '../../components/Datepicker';

const NewTask = ({navigation}: StackScreenProps<RootStackParamList>) => {
  const style = useThemedStyles(styles);

  const [title, setTitle] = useState('' as string);
  const [category, setCategory] = useState('' as string);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNavigateToBack = () => {
    navigation.goBack();
  };

  const handleAddTask = async () => {
    if (title && category) {
      setLoading(true);
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
      <ScrollView style={style.scroll} keyboardShouldPersistTaps={'always'}>
        <View style={style.header}>
          <Button
            type="text"
            form="rectangular"
            iconName="arrow-back"
            color="primary"
            align="start"
            onPress={handleNavigateToBack}>
            {t('button_back')}
          </Button>
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
        <Pressable onPress={() => setModalVisible(true)}>
          <CustomInput
            label={'Data'}
            value={date?.toLocaleDateString() || ''}
            /* value={date} */
            iconName="event"
            editable={false}
          />
        </Pressable>
        {!loading ? (
          <Button
            type="containered"
            form="rectangular"
            color="primary"
            align="center"
            iconName="add"
            onPress={handleAddTask}>
            {t('button_add')}
          </Button>
        ) : (
          <Button
            type="containered"
            form="rectangular"
            color="primary"
            align="center"
            disabled
            loading>
            {t('button_add')}
          </Button>
        )}
      </ScrollView>
      <Datepicker
        date={date}
        setDate={setDate}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default NewTask;
