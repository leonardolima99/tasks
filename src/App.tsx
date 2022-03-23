import React, {Suspense} from 'react';
import {StatusBar, useColorScheme, ActivityIndicator} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import './locales';

import Routes from './routes';

import ThemeProvider from './themes/ThemeProvider';
import {colors} from './styles/colors';

const App = () => {
  const theme = useColorScheme();

  return (
    <ThemeProvider>
      <StatusBar
        animated={true}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            ...DefaultTheme.colors,
            background:
              theme === 'dark'
                ? colors.dark.BACKGROUND
                : colors.light.BACKGROUND,
          },
        }}>
        <Suspense fallback={<ActivityIndicator />}>
          <Routes />
        </Suspense>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
