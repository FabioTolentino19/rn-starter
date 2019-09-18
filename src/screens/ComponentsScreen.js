import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Alô Amigo !!';
  const MyName = 'Fabio Tolentino';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {MyName}</Text>
      <Text style={styles.greetingStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  greetingStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
