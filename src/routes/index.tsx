import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tasks from '../screens/Tasks';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Tasks"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Tasks" component={Tasks} />
  </Stack.Navigator>
);

export default Routes;
