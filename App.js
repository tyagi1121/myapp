import React, { useState } from 'react';
import DetailsStu from './src/DetailsStu.component';
import Home from './src/Home';
import Books from './src/Books';
import Aboutus from './src/Aboutus';
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
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="About us" component={Aboutus} />
      </Stack.Navigator>
    </NavigationContainer>
  )


  }
  export default App;