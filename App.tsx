import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import Home from './src/screen/Home'
import Details from './src/screen/Details';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
     </NavigationContainer>
    )
  }
}

export default App;