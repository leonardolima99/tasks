import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, Platform} from 'react-native';

import formatDate from '../../utils/formatDate';

import styles from './styles';

type DateFormatProps = {
  d: Date;
  type: 'string' | 'isoDate';
};

const DateFormat = ({d, type}: DateFormatProps) => {
  const [date, setDate] = useState('' as string);

  useEffect(() => {
    const config = {
      locale: '' as string,
    };

    // Get device locale
    if (Platform.OS === 'android') {
      NativeModules.I18nManager
        ? (config.locale = NativeModules.I18nManager.localeIdentifier.replace(
            /_/,
            '-',
          ))
        : null;
    } else {
      NativeModules.SettingsManager &&
      NativeModules.SettingsManager.settings &&
      NativeModules.SettingsManager.settings.AppleLanguages
        ? (config.locale =
            NativeModules.SettingsManager.settings.AppleLanguages[0].replace(
              /_/,
              '-',
            ))
        : null;
    }

    setDate(formatDate(d, type, config.locale));
  }, [d, type]);

  return (
    <View>
      <Text style={styles.title}>{date}</Text>
    </View>
  );
};

export default DateFormat;
