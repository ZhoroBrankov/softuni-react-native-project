import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <Button title="Create Account" onPress={() => {}} />
    </View>
  );
