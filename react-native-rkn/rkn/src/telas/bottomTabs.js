import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Entypo, MaterialIcons,Foundation} from '@expo/vector-icons'

import Configuracoes from './configuracoes'
import Lista from './lista'
import Home from './home'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return(
    <Tab.Navigator 
      screenOptions={{tabBarStyle: {backgroundColor: '#000000',borderTopColor: 'transparent',}}}
      tabBarOptions={{activeTintColor: '#FF4D6D', tabStyle:{paddingBottom: 5, paddingTop: 5}}}
    
    >

      <Tab.Screen 
        name="Inicio" 
        component={Home} 
        options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color}/>)}}
      />
      
      <Tab.Screen 
        name="Lista" 
        component={Lista} 
        options={{tabBarIcon: ({size,color}) => (<Foundation name="list" size={size} color={color}/>)}}
      />

      <Tab.Screen 
        name="Configurações" 
        component={Configuracoes} 
        options={{tabBarIcon: ({size,color}) => (<MaterialIcons name="settings" size={size} color={color}/>)}}
      />
    </Tab.Navigator>
  )
}