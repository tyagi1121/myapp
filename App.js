import React, { useState } from 'react';
import DetailsStu from './src/DetailsStu.component';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './src/Calculator';

const App = () => {
  
  const Stack = createNativeStackNavigator();


  return  (
    <NavigationContainer>
     <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={DetailsStu} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  )


  }
  export default App;