import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataProduct} from '../../components/ProductList/data';
import productApi from '../../api/productApi';

const ProductCard = ({card}) => {
  const {productID, imageURL, productName, unit, price} = card;
  
  const route = useRoute();

  const navigation = useNavigation();

  const handlePressBackExplore = id => {
    console.log(id);
    navigation.navigate('ExploreScreen');
  };

  const handlePressDetails = id => {
    console.log(id);
    navigation.navigate('ProductDetails');
  };

  return (
    <View style={[{}]}>
      <View style={[]}>
        <TouchableOpacity
          style={[{marginLeft: 40, marginHorizontal: 50}]}
          onPress={() => handlePressDetails(productID)}>
          <SafeAreaView style={styles.container}>
            <View>
              <View style={styles.centerImg}>
                <Image source={{uri: imageURL}} style={styles.imageProduct} />
              </View>

              <Text style={styles.nameProduct}> {productName} </Text>
              <Text style={[styles.common, styles.unit]}>{unit}</Text>

              <View style={[styles.inline]}>
                <Text style={[styles.common, styles.price]}>{price}</Text>

                <TouchableOpacity style={[styles.btnAdd]}>
                  <Image
                    source={require('../../assets/images/IconAddProduct.png')}
                    style={styles.iconAdd}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameList: {
    fontSize: 20,
    color: '#181725',
    paddingTop: 15,
  },

  container: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
    width: '130%',
    // height: '50%',
  },

  common: {
    marginLeft: 20,
  },

  centerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageProduct: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    marginVertical: 20,
  },

  nameProduct: {
    color: '#181725',
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: '700',
    marginLeft: 15,
  },

  unit: {
    color: '#7C7C7C',
    fontSize: 14,
    marginTop: 5,
  },

  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 20,
  },

  price: {
    color: '#181725',
    fontWeight: 'bold',
    fontSize: 12,
  },

  btnAdd: {
    backgroundColor: '#53B175',
    borderRadius: 17,
    paddingHorizontal: 14.33,
    paddingVertical: 14.33,
    marginRight: 15,
  },

  iconAdd: {
    width: 17,
    height: 17,
  },
});

export default ProductCard;
