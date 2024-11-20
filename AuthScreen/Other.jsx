import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import Button_Primary from '../Other/Button_Primary'
import Button_Secondary from '../Other/Button_Secondary'

const { height: screenHeight } = Dimensions.get('window');

const Other = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          source={require('../assets/image_1.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          "Connecting Hearts, Delivering Care—Your App for{" "}
          <Text style={styles.highlightedText}>Elderly Wellness</Text>."
        </Text>

        <View style={styles.buttonWrapper}>
          <Button_Primary
           onPress={()=>navigation.navigate('Register')}
            title="Create an account"
          />
          <Button_Secondary
            onPress={()=>navigation.navigate('Login')}
            title="Login"
          />
        </View>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    height: screenHeight * 1.15,
  },
  contentWrapper: {
    marginHorizontal: 16,
  },
  image: {
    height: 228,
    width: 228,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily:'Roboto-Regular',
    lineHeight: 22,
    color: '#005B50',
    fontSize: 16,
    width: '83%',
    alignSelf: 'center',
    marginTop: '20%',
  },
  highlightedText: {
    fontFamily:'Roboto-Bold',
    color: '#005B50',
    lineHeight:22
  },
  buttonWrapper: {
    marginTop: '10%',
  },
});
