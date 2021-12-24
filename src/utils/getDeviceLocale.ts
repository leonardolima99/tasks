import {NativeModules, Platform} from 'react-native';

export default function getDeviceLocale() {
  let config = {
    locale: '' as string,
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

  return config.locale;
}
