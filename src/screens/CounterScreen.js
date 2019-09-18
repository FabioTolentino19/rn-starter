import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { counter: number };
  // action === { payload: 1 || -1}
  return { ...state, counter: state.counter + action.payload };
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
        // Don´t do this!
        //  counter++;
        // counter = counter + 1;
        dispatch({ payload: 1 })
      }} />
      <Button
        title="Decrease"
        onPress={() => {
        dispatch({ payload: -1});
      }} />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;