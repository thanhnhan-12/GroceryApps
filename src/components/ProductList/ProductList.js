import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataProduct} from './data';

import CardSilder from 'react-native-cards-slider';
import {useNavigation} from '@react-navigation/native';
import ProductCard from './ProductCard';


const ProductList = () => {

  const navigation = useNavigation();

  const handlePressDetails = id => {
    console.log(id);
    navigation.navigate('ProductDetails');
  };

  return (
    <View style={[styles.wrapper ]}>
      <ProductCard/>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    
  },

  container: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  common: {
    marginLeft: 25,
  },

  centerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageProduct: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },

  nameProduct: {
    color: '#181725',
    fontSize: 18,
    letterSpacing: 0.1,
    fontWeight: '700',
    marginLeft: 20,
  },

  unit: {
    // textAlign: 'center',
    color: '#7C7C7C',
    fontSize: 14,
    marginTop: 5,
  },

  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 20,
    marginTop: 30,
  },

  price: {
    color: '#181725',
    fontWeight: 'bold',
    fontSize: 18,
  },

  btnAdd: {
    backgroundColor: '#53B175',
    borderRadius: 17,
    paddingHorizontal: 14.33,
    paddingVertical: 14.33,
  },

  iconAdd: {
    width: 17,
    height: 17,
  },
});

export default ProductList;
