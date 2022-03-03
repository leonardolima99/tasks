import React, {Suspense} from 'react';
import {StatusBar, useColorScheme, ActivityIndicator} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import './locales';

import Routes from './routes';

const App = () => {
  const theme = useColorScheme();

  return (
    <>
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
    </>
  );
};

export default App;
