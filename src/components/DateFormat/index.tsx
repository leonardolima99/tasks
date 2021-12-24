import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import formatDate from '../../utils/formatDate';
import getDeviceLocale from '../../utils/getDeviceLocale';

import styles from './styles';

type DateFormatProps = {
  d: Date;
  type: 'string' | 'isoDate';
};

const DateFormat = ({d, type}: DateFormatProps) => {
  const [date, setDate] = useState('' as string);

  useEffect(() => {
    const locale = getDeviceLocale();

    setDate(formatDate(d, type, locale) as string);
  }, [d, type]);

  return (
    <View>
      <Text style={styles.title}>{date}</Text>
    </View>
  );
};

export default DateFormat;
