import { SafeAreaView, StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import React, { useEffect } from 'react';

const { height: screenHeight } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  console.log("splash");
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Other');
    }, 3000); // 3 seconds delay

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
 
      <SafeAreaView style={{backgroundColor:'#ffffff', display:'flex', justifyContent: 'center', height: screenHeight *1.05}}>
      <View style={{marginHorizontal: 16}}>
        <Image
          source={require('../assets/logotext.png')}
          style={{width: 208, height: 190, alignSelf: 'center'}}
        />
      </View>
   
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
