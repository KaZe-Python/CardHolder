import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import HomeScreen from '../screens/HomeScreen'
import NewCardScreen from '../screens/NewCardScreen'

const Stack = createNativeStackNavigator()

export default function MainStack(){
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='home' component={HomeScreen} />
          <Stack.Screen name='edit' component={NewCardScreen} />
      </Stack.Navigator>
  )
}