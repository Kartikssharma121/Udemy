import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './StackNavigator'
import { useFonts } from 'expo-font';
const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  });
  return (
 <>
   <StackNavigator/>
 </>
          
   
  )
}

export default App

const styles = StyleSheet.create({})