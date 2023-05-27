import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import {dataProduct} from '../ProductList/data';
import IconDe from '../../assets/SVG/iconDecrease.svg';
import IconIn from '../../assets/SVG/iconIncrease.svg';
import IconRemove from '../../assets/SVG/IconRemove.svg';
import Cart from './Cart';

const MyCart = ({item}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, {height: windowHeight}]}>
      <Cart />

    </View>
  );
};

const styles = StyleSheet.create({})

export default MyCart;
