import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import NotFoundScreen from '../screens/NotFoundScreen';
import TheaterScreen from '../screens/TheaterScreen';

const Stack = createStackNavigator();

export default () => {
  return <Stack.Navigator>
    <Stack.Screen name="Tabs" component={Tabs}/>
    <Stack.Screen name="Theater" component={TheaterScreen}/>
    <Stack.Screen name="NotFound" component={NotFoundScreen}/>
  </Stack.Navigator>
}
