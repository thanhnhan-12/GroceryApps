import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
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

  
});

export default ProductList;
