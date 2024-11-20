import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

const List = () => {
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },  // Changed duplicate title
        { id: '4', title: 'Item 4' },  // Changed duplicate id
        { id: '5', title: 'Item 5' },  // Added unique id
      ];
    
      const renderItem = ({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      );
  return (
    <View>
         <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({})