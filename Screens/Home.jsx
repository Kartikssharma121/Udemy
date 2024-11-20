import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category_Btn from '../Other/Category_Btn';
import Head from '../Other/Head';


const Home = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.innerContainer}>

      <Head />
      </View>
     

      <View style={{ marginVertical: 20 }}>
        <Category_Btn />

      </View>

    </View>
    </SafeAreaView>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  innerContainer: {
    marginHorizontal: 16
  }
})