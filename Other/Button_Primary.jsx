import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button_Primary = ({title,onPress}) => {
  return (
    
      <Pressable onPress={onPress} style={{width:"100%",height:48,backgroundColor:'#17BBB0',display:'flex',borderRadius:6,justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Text style={{color:'#ffffff',fontSize:16,fontFamily:'Roboto-Regular',}}>{title}</Text>
      </Pressable>

  )
}

export default Button_Primary

const styles = StyleSheet.create({})