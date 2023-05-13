import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import ProductCard from './ProductCard';

const ProductList = ({productList}) => {
  const navigation = useNavigation();
  console.log({productList});
  const handlePressDetails = id => {
    navigation.navigate('ProductDetails');
  };

  return (
    <View style={[styles.wrapper]}>
      <View style={[styles.gridView]} >
        <FlatList
          contentContainerStyle={{paddingRight: 25}}
          data={productList}
          style={styles.gridView}
          spacing={20}
          horizontal
          renderItem={({item}) => <ProductCard card={item} />}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginLeft: -10,
  },
  wrapper: {
    marginTop: 20,
  },
});

export default ProductList;
