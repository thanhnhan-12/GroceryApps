import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import MyCart from '../components/MyCart/MyCart';

const CartScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <MyCart />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
