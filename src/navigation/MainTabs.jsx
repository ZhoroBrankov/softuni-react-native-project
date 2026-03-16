import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import DetailsScreen from '../screens/DetailsScreen';
import PostPetScreen from '../screens/PostPetScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FeedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="PetList" component={FeedScreen} options={{ title: 'Feed' }} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FeedStack} options={{ headerShown: false }} />
      <Tab.Screen name="Post" component={PostPetScreen} />
    </Tab.Navigator>
  );
}