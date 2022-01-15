import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CardContextProvider from './src/context/cardContex';
import MainStack from './src/stacks/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <CardContextProvider>
      <MainStack />
      </CardContextProvider>
    </NavigationContainer>
  );
}


