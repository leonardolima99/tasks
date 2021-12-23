import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, Platform} from 'react-native';

import styles from './styles';

const DateFormat = () => {
  const [date, setDate] = useState('' as string);

  useEffect(() => {
    function formatDate(d: number) {
      let config = {
        locale: '',
        options: {
          weekday: 'short' as 'short' | 'long' | 'narrow' | undefined,
          month: 'short' as 'short' | 'long' | 'narrow' | undefined,
        },
      };

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
      let [month, week] = dateNow
        .toLocaleDateString(config.locale, config.options)
        .split(' ');

      month = month === 'mai' ? month.replace('mai', 'maio') : month;
      month = month.charAt(0).toUpperCase() + month.slice(1);
      week = week.charAt(0).toUpperCase() + week.slice(1);
      let year = dateNow.getFullYear();
      console.log(`${week}, ${day} ${month} ${year}`);
      return `${week}, ${day} ${month} ${year}`;
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
