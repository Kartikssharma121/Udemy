import { Image, ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native'


import React, { useRef } from 'react'
import Accordion from '../Other/Accordion'
import Button_Primary from '../Other/Button_Primary'
import Bottom_Sheet from '../Other/Bottom_Sheet'


const Membership = () => {
  const refRBSheet = useRef();

  return (
    
    <SafeAreaView>
      <ScrollView style={{}}>
        <View style={{ height: 240,marginTop:0 }}>
          <Image
            source={require('../assets/topp.png')}
            style={{ width: "100%", height: 166 }}
          />
          <View style={{ height: "100%", backgroundColor: "white" }}>
            <Image
              source={require('../assets/Text.png')}
              style={{ width: 148, height: 24, alignSelf: 'center', marginBottom: 8 }}
            />
            <Text style={{ alignSelf: 'center', width: 330, textAlign: 'center', color: "#4D4D4D", fontSize: 16, fontFamily: 'Roboto-Regular', letterSpacing: 0.5 }}>Gain access to a world of possibilities designed for you.</Text>
          </View>


        </View>
        <View style={{ height: 500, backgroundColor: "white", marginTop: 46 }}>

          <View style={{ marginHorizontal: 16 }}>


            <Image
              source={require('../assets/Benefits.png')}
              style={{ width: 200, height: 20, marginBottom: 8 } } 
              />
          <View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginTop: 40 }}>
             
             
               <View style={{width:190,borderRadius:16, height: 100, backgroundColor: "white",elevation:2}}>
               <View style={{ backgroundColor: "#17BBB0", borderRadius: 80, width: 50, height: 50, alignSelf: 'center', position: 'absolute', marginTop: -24 }}>

               </View>
               <Text style={{ alignSelf: 'center', marginTop: "24%", color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>
            
            
             </View>
            
               <View style={{width:190,borderRadius:16, height: 100, backgroundColor: "white",elevation:2}}>
               <View style={{ backgroundColor: "#17BBB0", borderRadius: 80, width: 50, height: 50, alignSelf: 'center', position: 'absolute', marginTop: -24 }}>

               </View>
               <Text style={{ alignSelf: 'center', marginTop: "24%", color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>
               </View>
            
             
           
           </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginTop: 40 }}>
             
            
               <View style={{width:190,borderRadius:16, height: 100, backgroundColor: "white",elevation:2}}>
               <View style={{ backgroundColor: "#17BBB0", borderRadius: 80, width: 50, height: 50, alignSelf: 'center', position: 'absolute', marginTop: -24 }}>

               </View>
               <Text style={{ alignSelf: 'center', marginTop: "24%", color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>
               </View>
            
            
            
               <View style={{width:190,borderRadius:16, height: 100, backgroundColor: "white",elevation:2}}>
               <View style={{ backgroundColor: "#17BBB0", borderRadius: 80, width: 50, height: 50, alignSelf: 'center', position: 'absolute', marginTop: -24 }}>

               </View>
               <Text style={{ alignSelf: 'center', marginTop: "24%", color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>
               </View>
            
           
           
           </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginTop: 40 }}>
             
             
                <View style={{width:190,borderRadius:16, height: 100, backgroundColor: "white",elevation:2}}>
                <View style={{ backgroundColor: "#17BBB0", borderRadius: 80, width: 50, height: 50, alignSelf: 'center', position: 'absolute', marginTop: -24 }}>

                </View>
                <Text style={{ alignSelf: 'center', marginTop: "24%", color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>
                </View>
             
           
          
                <View style={{width:190,borderRadius:16, height: 100, backgroundColor: "white",elevation:2}}>
                <View style={{ backgroundColor: "#17BBB0", borderRadius: 80, width: 50, height: 50, alignSelf: 'center', position: 'absolute', marginTop: -24 }}>

                </View>
                <Text style={{ alignSelf: 'center', marginTop: "24%", color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>
                </View>
             
             
            
            </View>


          </View>

        </View>

        <View style={{ height: "auto", backgroundColor: "white", marginBottom: 100 }}>

          <View style={{ marginHorizontal: 16 }}>


            <Image
              source={require('../assets/FAQ.png')}
              style={{ width: 38, height: 18, marginBottom: 16 }}
            />
            <View >

              <Accordion question={"Is there a limit on the number of devices I can use Aapkazone membership? "} answer={"While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."} />
              <Accordion question={"Is there a limit on the number of devices I can use Aapkazone membership? "} answer={"While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."} />
              <Accordion question={"Is there a limit on the number of devices I can use Aapkazone membership? "} answer={"While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."} />
              <Accordion question={"Is there a limit on the number of devices I can use Aapkazone membership? "} answer={"While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."} />
              <Accordion question={"Is there a limit on the number of devices I can use Aapkazone membership? "} answer={"While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."} />

            </View>

          </View>
        </View>
        <Bottom_Sheet bottomSheetRef={refRBSheet} />


      </ScrollView>
      <View style={{

        position: 'absolute',
        left: 16,
        right: 16, // Adjust for left and right spacing
        bottom: 16,
        // Fixed distance from bottom
        zIndex: 1,
      }}>

        <Button_Primary title={"Choose Plan"} onPress={() => refRBSheet.current.open()} />


      </View>
    </SafeAreaView>
  )
}

export default Membership

const styles = StyleSheet.create({})