import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import OtpField from './OtpField'
import Button_Primary from '../Other/Button_Primary'
const { height: screenHeight } = Dimensions.get('window');
const Otp = ({navigation}) => {
  return (
    <View style={styles.container}> 
         <View style={styles.contentWrapper}> 
         
          <Text  style={{fontSize:24,marginTop:"14%",marginBottom:"6%",fontFamily:'Roboto-Regular',color:"#005B50"}}>Verify with OTP received to your mobile number</Text>
          <OtpField
          />
           <View style={{marginTop:"10%"}}>
         <Button_Primary
         title={"Verify"}
         onPress={()=>navigation.replace('Homee')}
         
         />
         <Text style={{fontSize:12,marginTop:"2%",fontFamily:'Roboto-Regular'}} >Didn’t receive it? Retry in 0:30</Text>
         </View>

         </View>
         </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
     
      height: screenHeight * 1.05,
    },
    contentWrapper: {
      marginHorizontal: 16,
    },
    
})