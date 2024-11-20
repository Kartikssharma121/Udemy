import { Image, StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const More = () => {
  return (
    <SafeAreaView>
    
       
    <ScrollView style={styles.container}>
    <View style={{width:"100%",height:200,backgroundColor:"#01D1C1"}}>
          <Image
          source={require('../assets/Background.png')}
          style={{width:"100%",height:"130%"}}
          />

        </View>
      <View style={styles.innerContainer}>
       <View style={{height:220,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:-60}}>
        <View style={{marginTop:-84,alignSelf:'center',borderRadius:38,}}>
        <Image
          source={require('../assets/profile.png')}
          style={{width:180,height:180}}
          />
        </View>
        <Image
          source={require('../assets/edit.png')}
          style={{width:24,height:24,alignSelf: 'flex-end',marginTop:-78,marginRight:16}}
          />
          <Text style={{alignSelf:'center',marginTop:56,fontSize:22,fontFamily:'Roboto-Bold'}}>Sanjeev Kumar</Text>
       </View>
       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>My Subscription</Text>
       </View>

       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Track Request</Text>
       </View>

       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>My Account</Text>
       </View>

       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Help & Support</Text>
       </View>

       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Settings</Text>
       </View>

       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>My Subscription</Text>
       </View>

       <View style={{height:66,width:"100%",backgroundColor:"white",borderRadius:16,marginTop:16,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <Image
        source={require('../assets/Support.png')}
        style={{width:40,height:40,marginHorizontal:16}}
        />
        <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Log Out</Text>
       </View>
       <Text style={{marginVertical:60,textAlign:'center',color:'gray'}}>Version 1.10.0</Text>
        
      </View>
</ScrollView>
</SafeAreaView>
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F3F8"
  },
  innerContainer: {
    marginHorizontal: 16
  }
})