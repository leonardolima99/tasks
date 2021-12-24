import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tasks from '../screens/Tasks';
import NewTask from '../screens/NewTask';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Tasks"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Tasks" component={Tasks} />
    <Stack.Screen name="NewTask" component={NewTask} />
  </Stack.Navigator>
);

export default Routes;
