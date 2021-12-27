import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

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
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
