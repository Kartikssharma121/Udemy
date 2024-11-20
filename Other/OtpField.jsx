import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef } from 'react';

const OtpField = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const handleKeyPress = (e, ref, prevRef) => {
    if (e.nativeEvent.key === 'Backspace' && !ref.current.value) {
      prevRef.current.focus();
    }
  };

  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          onChangeText={(txt) => { if (txt.length >= 1) { et2.current.focus(); } }}
          onKeyPress={(e) => handleKeyPress(e, et1, et1)}
          keyboardType="number-pad"
          ref={et1}
          style={styles.input}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          onChangeText={(txt) => { if (txt.length >= 1) { et3.current.focus(); } }}
          onKeyPress={(e) => handleKeyPress(e, et2, et1)}
          keyboardType="number-pad"
          ref={et2}
          style={styles.input}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          onChangeText={(txt) => { if (txt.length >= 1) { et4.current.focus(); } }}
          onKeyPress={(e) => handleKeyPress(e, et3, et2)}
          keyboardType="number-pad"
          ref={et3}
          style={styles.input}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          onChangeText={(txt) => { if (txt.length >= 1) { et5.current.focus(); } }}
          onKeyPress={(e) => handleKeyPress(e, et4, et3)}
          keyboardType="number-pad"
          ref={et4}
          style={styles.input}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          onChangeText={(txt) => { if (txt.length >= 1) { et6.current.focus(); } }}
          onKeyPress={(e) => handleKeyPress(e, et5, et4)}
          keyboardType="number-pad"
          ref={et5}
          style={styles.input}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          onChangeText={(txt) => { if (txt.length >= 1) { /* Last input, so do nothing */ } }}
          onKeyPress={(e) => handleKeyPress(e, et6, et5)}
          keyboardType="number-pad"
          ref={et6}
          style={styles.input}
        />
      </View>
    </View>
  );
}

export default OtpField;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#B3B9CC",
  },
  input: {
    height: "100%",
    textAlign: 'center',
    fontSize: 16,
  }
});
