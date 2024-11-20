import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Collapsible from 'react-native-collapsible';

const Accordion = ({ question, answer }) => {
    const [Collapsed, setCollapsed] = useState(true);
    const toggleExpand = () => {
        setCollapsed(!Collapsed);
    }
    return (
        <View style={{ height: "auto" ,marginVertical:4}}>
            <TouchableOpacity onPress={toggleExpand} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: "86%", fontSize: 14, fontWeight: '500', color: '#333333' }}>{question}</Text>
                <Image source={Collapsed ? require('../assets/drop.png') : require('../assets/Up.png')} style={{ width: 26, height: 26 }} />
            </TouchableOpacity>
            <Collapsible collapsed={Collapsed}>
                <View style={{marginVertical:8}}>
                    <Text style={{ width: "100%", fontSize: 14, fontWeight: '400', color: '#8C8C8C' }}>{answer}</Text>
                </View>
            </Collapsible>
            <Text style={{ width: "100%", overflow: 'hidden',color:'#8C8C8C' }}>----------------------------------------------------------------------------</Text>


        </View>
    )
}

export default Accordion

const styles = StyleSheet.create({

})