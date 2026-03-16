import React, { useState } from 'react';
import { View, TextInput, Button, Switch, Text } from 'react-native';
import apiClient from '../api/client';

export default function PostPetScreen() {
  const [name, setName] = useState('');
  const [urgent, setUrgent] = useState(false);

  const handlePost = async () => {
    try {
      await apiClient.post('/pets', { name, urgent });
      alert("Success!");
    } catch (e) { alert("Error"); }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Pet description" onChangeText={setName} style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <Text>Is this urgent?</Text>
        <Switch value={urgent} onValueChange={setUrgent} />
      </View>
      <Button title="Post sighting" onPress={handlePost} />
    </View>
  );
}