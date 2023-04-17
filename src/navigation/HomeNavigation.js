import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetailsScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ExploreDetailsScreen from '../screens/ExploreDetailsScreen';
import CartScreen from '../screens/CartScreen';

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'ProductDetails'}
          component={ProductDetails}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'ExploreScreen'}
          component={ExploreScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'ExploreDetailsScreen'}
          component={ExploreDetailsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'CartScreen'}
          component={CartScreen}
          options={{headerShown: false}}
        />

      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
