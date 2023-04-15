import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetailsScreen';

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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
