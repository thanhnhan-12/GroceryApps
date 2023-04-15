import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Shop from '../assets/SVG/ShopBar.svg';
import Explore from '../assets/SVG/ExploreBar.svg';
import Cart from '../assets/SVG/CartBar.svg';
import Favourite from '../assets/SVG/FavouriteBar.svg';
import Account from '../assets/SVG/AccountBar.svg';

const Tab = createBottomTabNavigator();

const MenuNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
      <Tab.Screen
        name="Shop"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color}) => <Shop name="shop" color={color} size={30} />,
        }}
      />

      <Tab.Screen
        name="Explore"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <Explore name="explore" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => <Cart name="cart" color={color} size={30} />,
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({color}) => (
            <Favourite name="favourite" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Account name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuNavigation;
