import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Button_Secondary = ({title,onPress}) => {
  return (
    <View style={{borderWidth:2,borderColor:'#17BBB0',marginTop:20,display:'flex',borderRadius:6,}}>

<TouchableOpacity onPress={onPress} style={{width:"100%",height:48,justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#17BBB0',fontSize:16,fontFamily:'Roboto-Regular'}}>{title}</Text>
  </TouchableOpacity>
    </View>
   
  )
}

export default Button_Secondary

const styles = StyleSheet.create({})