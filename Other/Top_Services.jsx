import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Top_Services = () => {
    const TopServices = [
        {
            id: 1,
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "Medicine"
        },
        {
            id: 2,
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "Medicine"
        },
        {
            id: 3,
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "Medicine"
        },
        {
            id: 4,
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "Medicine"
        },
    ]

const renderItem=({item})=>{
    return(
        <View> 
        <Image
        source={{uri:item.image}}
        style={{width:120,height:120,borderRadius:12,marginRight:16}}
        />
        <Text>{item.title}</Text>
     </View>
    )
  
}    

    return (
        <View>
            <Text style={{ fontSize: 17, fontFamily: 'Roboto-Medium', marginTop:24,marginBottom:16 }}>Top Services</Text>
            <FlatList
                data={TopServices}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginBottom:16}}
            />
           
        </View>
    )
}

export default Top_Services

const styles = StyleSheet.create({})