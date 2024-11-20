import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ServiceDetails = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: 'Roboto-Medium' }}>Health Support</Text>
        <Image
          source={require('../assets/Health.png')}
          style={{ width: "100%", height: 200, borderRadius: 16, marginTop: 16, marginBottom: 46 }}
        />
        <View style={{ elevation:2,width: "100%",marginBottom:16 ,height: 120, backgroundColor: "white", borderRadius: 16, }}  >
         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
          <View >
            <Text style={{fontSize: 18, marginTop:12,marginLeft:12, fontFamily: 'Roboto-Medium'}}>Ambulance</Text>
            <Text style={{ textDecorationStyle: 'dotted' , marginTop:6,lineHeight:20,marginLeft:12,color:"#666666",fontFamily:"Roboto-Regular"}}>
              {'• Prompt ambulance service\n'}
              {'• Reliable & trustworthy\n'}
              {'• T&C Apply'}
            </Text>
            </View>
            <TouchableOpacity style={{width:120,marginRight:16,height:40,backgroundColor:"#17BBB0",borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center'}}><Text style={{color:"white"}}>Request</Text></TouchableOpacity>
            </View>
        </View>

        <View style={{elevation:2, width: "100%",marginBottom:16 ,height: 120, backgroundColor: "white", borderRadius: 16, }}  >
         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
          <View >
            <Text style={{fontSize: 18, marginTop:12,marginLeft:12, fontFamily: 'Roboto-Medium'}}>Ambulance</Text>
            <Text style={{ textDecorationStyle: 'dotted' , marginTop:6,lineHeight:20,marginLeft:12,color:"#666666",fontFamily:"Roboto-Regular"}}>
              {'• Prompt ambulance service\n'}
              {'• Reliable & trustworthy\n'}
              {'• T&C Apply'}
            </Text>
            </View>
            <TouchableOpacity style={{width:120,marginRight:16,height:40,backgroundColor:"#17BBB0",borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center'}}><Text style={{color:"white"}}>Request</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{elevation:2, width: "100%",marginBottom:16 ,height: 120, backgroundColor: "white", borderRadius: 16, }}  >
         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
          <View >
            <Text style={{fontSize: 18, marginTop:12,marginLeft:12, fontFamily: 'Roboto-Medium'}}>Ambulance</Text>
            <Text style={{ textDecorationStyle: 'dotted' , marginTop:6,lineHeight:20,marginLeft:12,color:"#666666",fontFamily:"Roboto-Regular"}}>
              {'• Prompt ambulance service\n'}
              {'• Reliable & trustworthy\n'}
              {'• T&C Apply'}
            </Text>
            </View>
            <TouchableOpacity style={{width:120,marginRight:16,height:40,backgroundColor:"#17BBB0",borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center'}}><Text style={{color:"white"}}>Request</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{elevation:2, width: "100%",marginBottom:16 ,height: 120, backgroundColor: "white", borderRadius: 16, }}  >
         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
          <View >
            <Text style={{fontSize: 18, marginTop:12,marginLeft:12, fontFamily: 'Roboto-Medium'}}>Ambulance</Text>
            <Text style={{ textDecorationStyle: 'dotted' , marginTop:6,lineHeight:20,marginLeft:12,color:"#666666",fontFamily:"Roboto-Regular"}}>
              {'• Prompt ambulance service\n'}
              {'• Reliable & trustworthy\n'}
              {'• T&C Apply'}
            </Text>
            </View>
            <TouchableOpacity style={{width:120,marginRight:16,height:40,backgroundColor:"#17BBB0",borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center'}}><Text style={{color:"white"}}>Request</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{elevation:2, width: "100%",marginBottom:16 ,height: 120, backgroundColor: "white", borderRadius: 16, }}  >
         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
          <View >
            <Text style={{fontSize: 18, marginTop:12,marginLeft:12, fontFamily: 'Roboto-Medium'}}>Ambulance</Text>
            <Text style={{ textDecorationStyle: 'dotted' , marginTop:6,lineHeight:20,marginLeft:12,color:"#666666",fontFamily:"Roboto-Regular"}}>
              {'• Prompt ambulance service\n'}
              {'• Reliable & trustworthy\n'}
              {'• T&C Apply'}
            </Text>
            </View>
            <TouchableOpacity style={{width:120,marginRight:16,height:40,backgroundColor:"#17BBB0",borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center'}}><Text style={{color:"white"}}>Request</Text></TouchableOpacity>
            </View>
        </View>

        


      </View>
    </View>
    </ScrollView>
  )
}

export default ServiceDetails

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  innerContainer: {
    marginHorizontal: 16,

  },
})