import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarePlan = () => {
  return (
    <View style={styles.container}>
    <View style={styles.innerContainer}>
  
    <Text>CarePlan</Text>
    </View>
  </View>
  )
}

export default CarePlan

const styles = StyleSheet.create({
    container:{
            width:"100%",
            height:"100%",
            backgroundColor:"#ffffff"
    },
    innerContainer:{
      marginTop:20,
      marginHorizontal:16
    }
})