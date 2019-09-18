import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [pass, setPass] = useState('');

  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        secureTextEntry={true}
        onChangeText={(newValue) => setPass(newValue)}
      />
      { pass.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;