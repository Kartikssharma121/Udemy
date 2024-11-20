import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Inputfield from '../Other/Inputfield';
import Button_Primary from '../Other/Button_Primary'
import Button_Secondary from '../Other/Button_Secondary'

const { height: screenHeight } = Dimensions.get('window');
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={styles.contentWrapper}>
         
            <Text style={{fontSize:36,color:"#005B50",marginTop:"10%",fontFamily:'Roboto-Regular'}}>Login</Text>
          
         <View style={styles.inputfield}>
            <Inputfield
              keyboardType="number-pad"
            label={"Mobile Number"}
            placeholder={"Enter your 10 Digit "}
            />
         </View>
         <View style={{marginTop:"8%"}}>
         <Button_Primary
         title={"Get Otp"}
         onPress={()=>navigation.navigate('Otp')}
         
         />
         <Text style={{fontSize:12,marginTop:"2%"}} >By clicking, I accept the  <Text style={{fontWeight:'600'}}>term of service </Text> and <Text style={{fontWeight:'600'}} >privacy policy</Text> </Text>
         </View>
        
         </View>
         
    </View>
  )
}

export default Login

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