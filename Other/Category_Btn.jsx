import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Councillor from '../Other/Councillor'
import Plans from '../Other/Plans';
import Services2 from '../Other/Services2';


const Category_Btn = () => {
    const [active, setActive] = useState('Plans');
    handleOnClick = (title) => {

        if (title === "Plans") {
            setActive(title);
        } else if (title === "Services") {
            setActive(title);
        } else if (title === "Be Councillor") {
            setActive(title);
        }
    }

    const category = [{ id: '1', title: 'Plans', },
    { id: '2', title: 'Services', },
    { id: '3', title: 'Be Councillor', }]

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleOnClick(item.title)}
            style={active === item.title ? styles.ActiveBtn : styles.InActiveBtn}
        >
            <Text style={active === item.title ? styles.ActiveTxt : styles.InActiveTxt}>
                {item.title}
            </Text>
        </TouchableOpacity>



    );
    return (
        <View>
            <View style={{marginHorizontal:16 , marginBottom:12,}}>


               
                <FlatList
                    contentContainerStyle={{ gap: 12, }}
                    data={category}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View >
            {active === "Plans" &&
                    <Plans />
                }

                {active === "Services" &&
                    <Services2 />
                }

                {active === "Be Councillor" &&
                    <Councillor />
                }
            </View>
        </View>
    )
}

export default Category_Btn

const styles = StyleSheet.create({
    ActiveBtn: {
        padding: 12,
        paddingHorizontal: 20,
        backgroundColor: '#17BBB0',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#17BBB0'

    },
    ActiveTxt: {
        color: "white",
        fontSize: 13,
        fontFamily:'Roboto-Medium'
    },
    InActiveBtn: {
        padding: 12,
        paddingHorizontal: 20,
        backgroundColor: 'white',

        borderRadius: 26,
        borderWidth: 1,
        borderColor: '#17BBB0'

    },
    InActiveTxt: {
        color: "#17BBB0",
        fontSize: 13,
         fontFamily:'Roboto-Regular'
    },

})