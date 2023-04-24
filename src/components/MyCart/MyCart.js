import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {dataProduct} from '../ProductList/data';
import IconDe from '../../assets/SVG/iconDecrease.svg';
import IconIn from '../../assets/SVG/iconIncrease.svg';
import IconRemove from '../../assets/SVG/IconRemove.svg';
import Cart from './Cart';

const MyCart = ({item}) => {

  return (
    <View style={[{backgroundColor: '#fff'}]}>
      <Text
        style={[
          {
            fontSize: 20,
            color: '#181725',
            marginVertical: 30,
            textAlign: 'center',
          },
        ]}>
        Giỏ hàng
      </Text>

      <Cart />

      <TouchableOpacity style={styles.btnCheckout}>
        <Text style={styles.textCheckout}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  btnCheckout: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '95%',
    paddingVertical: '4%',
    marginVertical: 35,
    marginLeft: 10,
  },

  textCheckout: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default MyCart;
