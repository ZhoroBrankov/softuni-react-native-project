import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import apiClient from '../api/client';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await apiClient.post('/auth/login', { email, password });
      await SecureStore.setItemAsync('userToken', res.data.token);
    } catch (e) { alert("Login Error"); }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 20, justifyContent: 'center' }, input: { borderBottomWidth: 1, marginBottom: 15 } });