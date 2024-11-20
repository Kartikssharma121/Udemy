import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button_Primary from './Button_Primary';


const Bottom_Sheet = ({ bottomSheetRef }) => {
  const closeSheet = () => {
    if (bottomSheetRef && bottomSheetRef.current) {
      bottomSheetRef.current.close();  // Close the bottom sheet
    }
  };
  return (
    <RBSheet
      ref={bottomSheetRef}
      height={400}
      openDuration={250} // Smooth open duration
      closeOnPressMask={true}
      closeOnDragDown={true} // Allow drag down to close
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        draggableIcon: {
          backgroundColor: "gray",
          width: 100,
          height: 5,
          alignSelf: 'center',
          marginVertical: 10,
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }
      }}
    >
      <View style={styles.content}>

        <Image
        source={require('../assets/Choose.png')}
        style={{width:120,height:16,marginTop:24,marginBottom:16,alignSelf:'center'}}
        />
        <View style={{ height: 220, marginVertical: 12 }}>
          <View style={{ width: "100%",elevation:2 ,height: 100, backgroundColor: "white", borderRadius: 16, marginBottom: 20 }} >



            <Text style={{ alignSelf: 'center', color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>

          </View>

          <View style={{elevation:2, width: "100%", height: 100, backgroundColor: "white", borderRadius: 16, marginBottom: 20 }} >



            <Text style={{ alignSelf: 'center', color: "#333333", fontSize: 15, textAlign: 'center', letterSpacing: 0.5 }}>Programe benefits available across India</Text>

          </View>
        </View>



        <View style={{ width: "100%" }}>
          <Button_Primary onPress={closeSheet} title={"Cancel"} />
        </View>

        {/* Add additional content here */}
      </View>
    </RBSheet>
  );
};

export default Bottom_Sheet;

const styles = StyleSheet.create({
  content: {

    marginHorizontal: 16

  },
  sheetText: {
    marginTop: 20,
    marginBottom:8,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Medium',
  }
});
