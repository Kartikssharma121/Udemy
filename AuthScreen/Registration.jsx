import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Inputfield from '../Other/Inputfield';
import Button_Primary from '../Other/Button_Primary'
import Button_Secondary from '../Other/Button_Secondary'

const { height: screenHeight } = Dimensions.get('window');
const Registration = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={styles.contentWrapper}>
            <Text style={{fontSize:36,color:"#005B50",marginTop:"10%",fontFamily:'Roboto-Regular'}}>Registration</Text>
            <View style={{marginTop:"10%"}}>
            <Inputfield
            label={"Fullname"}
            placeholder={"Enter your "}
             keyboardType="default"
            />
         </View>
         <View style={styles.inputfield}>
            <Inputfield
            label={"Mobile Number"}
            placeholder={"Enter your 10 Digit "}
             keyboardType="number-pad"
             
            />
         </View>
         <View style={{marginTop:"10%"}}>
         <Button_Primary
         title={"Get Otp"}
         onPress={()=>navigation.navigate('Otp')}
         
         />
         <Text style={{fontSize:12,marginTop:"2%",fontFamily:'Roboto-Regular'}} >By clicking, I accept the  <Text style={{fontFamily:'Roboto-Medium'}}>term of service </Text> and <Text style={{fontFamily:'Roboto-Medium'}} >privacy policy</Text> </Text>
         </View>
        
         </View>
         
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
       
        height: screenHeight * 1.05,
      },
      contentWrapper: {
        marginHorizontal: 16,
      },
      inputfield:{
        marginTop:"6%"
      }
})