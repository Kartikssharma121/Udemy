import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputfield = ({label,placeholder,keyboardType,value, onChangeText}) => {
  return (
    <View>
      <Text style={{fontSize:14,fontFamily:'Roboto-Regular'}}>{label}</Text>
      <View style={{width:"100%",height:48,borderWidth:1,borderRadius:6,borderColor:'#B3B9CC',marginTop:8}}>
     <TextInput 
     placeholder={`${placeholder}${label}`}
     style={{padding:14}}
     onChangeText={onChangeText}
     placeholderTextColor={"grey"}
     keyboardType={keyboardType}
   
     />
      </View>
    </View>
  )
}

export default Inputfield

const styles = StyleSheet.create({})