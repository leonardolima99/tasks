import React, {Suspense} from 'react';
import {StatusBar, useColorScheme, ActivityIndicator} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import './locales';

import Routes from './routes';

import ThemeProvider from './themes/ThemeProvider';

const App = () => {
  const theme = useColorScheme();

  return (
    <ThemeProvider>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            ...DefaultTheme.colors,
            background: '#141419',
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
