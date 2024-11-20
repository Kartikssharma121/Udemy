import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList, ScrollView, StatusBar,SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Head = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentWrapper}>
               <View style={styles.header}>
           <Text style={styles.greeting}>Hi, Sanjeev</Text>
           <View style={styles.emergencyButton}>
             <TouchableOpacity
              style={styles.emergencyButtonContent}
             
           
              onPress={()=>navigation.navigate('Emergency')}
            >
              <Text style={styles.emergencyButtonText}>Emergency</Text>
              <Image
                source={require('../assets/image_2.png')}
                style={styles.emergencyButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        </View>
  )
}

export default Head

const styles = StyleSheet.create({

    container: {
              backgroundColor: '#ffffff',
              height: screenHeight * 1.05,
              flex:1,
              paddingTop:26
             
            },
            contentWrapper: {
             marginTop:20
              
            },
            header: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
         
            },
            greeting: {
              fontSize: 20,
              fontFamily:'Roboto-Medium'
            },
            emergencyButton: {
              backgroundColor: "#C50800",
              width: 130,
              height: 38,
              borderRadius: 8,
              justifyContent: 'center',
            },
            emergencyButtonContent: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
              paddingHorizontal: 12,
            },
            emergencyButtonText: {
              color: 'white',
              fontSize: 14,
              fontWeight: '500',
            },
            emergencyButtonIcon: {
              width: 20,
              height: 20,
            },
})