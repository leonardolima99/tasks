import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, Platform} from 'react-native';

import styles from './styles';

const DateFormat = () => {
  const [date, setDate] = useState('' as string);

  useEffect(() => {
    function formatDate(d: number) {
      let config = {
        locale: '',
        options: {weekday: 'short' as 'short' | 'long' | 'narrow' | undefined},
      };
      let monthName = [
        'Jan.',
        'Fev.',
        'Mar.',
        'Abr.',
        'Maio',
        'Jun.',
        'Jul.',
        'Ago.',
        'Set.',
        'Out.',
        'Nov.',
        'Dez.',
      ];

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

      let dateNow = new Date(d);
      let day = dateNow.getDate();
      let week = dateNow.toLocaleDateString(config.locale, config.options);
      week = week.charAt(0).toUpperCase() + week.slice(1, 3);
      let month = dateNow.getMonth();
      let year = dateNow.getFullYear();
      return `${week}, ${day} ${monthName[month]} ${year}`;
    }

    let dateNow = formatDate(Date.now());
    setDate(dateNow);
  }, []);

  return (
    <View>
      <Text style={styles.title}>{date}</Text>
    </View>
  );
};

export default DateFormat;
