import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
// Key declarado dentro da matriz  
//  const friends = [
//    {name: 'Friend #1', key: '1'},
//    {name: 'Friend #2', key: '2'},
//    {name: 'Friend #3', key: '3'},
//    {name: 'Friend #4', key: '4'},
//    {name: 'Friend #5', key: '5'},
//    {name: 'Friend #6', key: '6'},
//    {name: 'Friend #7', key: '7'},
//    {name: 'Friend #8', key: '8'},
//    {name: 'Friend #9', key: '9'},
//  ];

  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 27 },
    { name: 'Friend #5', age: 53 },
    { name: 'Friend #6', age: 30 },
    { name: 'Friend #7', age: 29 },
    { name: 'Friend #8', age: 44 },
    { name: 'Friend #9', age: 32 },
  ]

  return (
    <FlatList
//      horizontal
//      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name} // key extraido on run time
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}  </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
});

export default ListScreen;
