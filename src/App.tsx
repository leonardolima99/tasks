import React, {Suspense} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import './locales';

import Routes from './routes';

import ThemeProvider from './themes/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Suspense fallback={<ActivityIndicator />}>
          <Routes />
        </Suspense>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
