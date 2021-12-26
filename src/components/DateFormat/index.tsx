import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import formatDate from '../../utils/formatDate';
import getDeviceLocale from '../../utils/getDeviceLocale';

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

  return <Text>{date}</Text>;
};

export default DateFormat;
