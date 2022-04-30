import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/telas/login';
import BottomTabs from './src/telas/bottomTabs';
import Avaliar from './src/avaliar/avaliar';

const Stack = createNativeStackNavigator();


export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}}/>
        <Stack.Screen name="Avaliar" component={Avaliar}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}