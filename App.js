import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/components/LandingPage';
import HomePage from './src/components/HomePage';
import LogReg from './src/components/LogReg';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="LogReg" component={LogReg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
