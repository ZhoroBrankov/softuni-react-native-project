import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://softuni-react-native-api.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;