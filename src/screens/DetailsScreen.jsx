import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { pet } = route.params; 

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{pet.name}</Text>
      <Text>Location: {pet.location}</Text>
      <Text>Description: {pet.description}</Text>
    </View>
  );
}