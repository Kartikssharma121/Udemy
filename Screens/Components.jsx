import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


const Components = ({navigation,title}) => {
  return (
    <View>
      <Text>Components {title}</Text>
      <TouchableOpacity style={{backgroundColor:'red'}} onPress={()=>navigation.navigate('Apping')} ><Text>Apping</Text></TouchableOpacity>
    </View>
  )
}

export default Components

const styles = StyleSheet.create({})