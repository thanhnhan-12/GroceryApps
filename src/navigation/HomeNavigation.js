import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetailsScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ExploreDetailsScreen from '../screens/ExploreDetailsScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import AccountScreen from '../screens/AccountScreen';
import Filter from '../components/Filter/Filter';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PersonalInformation from '../screens/PersonalInformation';
import AdminScreen from '../screens/Admin/AdminScreen';
import AccountAdmin from '../components/Admin/Account';
import ProductListAdmin from '../components/Admin/ProductList';
import DeliveryScreen from '../screens/DeliveryScreen';
import OrderScreen from '../screens/OrderScreen';
import UserAddress from '../components/DeliveryAddress/UserAddress';
import Delivery from '../components/DeliveryAddress/Delivery';
import DeliveryEdit from '../components/DeliveryAddress/DeliveryEdit';
import WareHouse from '../components/Admin/WareHouse';
import FormEditProduct from '../components/Admin/ProductList/EditProduct/FormEditProduct';
import FormAddProduct from '../components/Admin/ProductList/AddProduct/FormAddProduct';
import AccountList from '../components/Admin/Account';
import FormEditAccount from '../components/Admin/Account/EditAccount/FormEditAccount';
import FormAddAccount from '../components/Admin/Account/AddAccount/FormAddAccount';
import PaymentSuccess from '../components/MyCart/PaymentSuccess';
import OrderAdmin from '../components/Admin/Order';
import SearchResultsScreen from '../screens/SearchResultsScreen';

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

        <Stack.Screen
          name={'PaymentSuccess'}
          component={PaymentSuccess}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'FavouriteScreen'}
          component={FavouriteScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'AccountScreen'}
          component={AccountScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Filter'}
          component={Filter}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'OrderScreen'}
          component={OrderScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'DeliveryScreen'}
          component={DeliveryScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'DeliveryEdit'}
          component={DeliveryEdit}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'UserAddress'}
          component={UserAddress}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'PersonalInformation'}
          component={PersonalInformation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'SearchResultsScreen'}
          component={SearchResultsScreen}
          options={{headerShown: false}}
        />

        {/* ADMIN */}
        <Stack.Screen
          name={'AdminScreen'}
          component={AdminScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'AccountList'}
          component={AccountList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'FormAddAccount'}
          component={FormAddAccount}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'FormEditAccount'}
          component={FormEditAccount}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'OrderAdmin'}
          component={OrderAdmin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'ProductAdmin'}
          component={ProductListAdmin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'FormAddProduct'}
          component={FormAddProduct}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'FormEditProduct'}
          component={FormEditProduct}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'WareHouse'}
          component={WareHouse}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
