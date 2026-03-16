import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, RefreshControl, View } from 'react-native';
import apiClient from '../api/client';

export default function FeedScreen({ navigation }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPets = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get('/pets');
      setPets(res.data);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchPets(); }, []);

  return (
    <FlatList
      data={pets}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchPets} />}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={{ padding: 15, borderBottomWidth: 1 }}
          onPress={() => navigation.navigate('Details', { pet: item })}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text>{item.location}</Text>
        </TouchableOpacity>
      )}
    />
  );
}