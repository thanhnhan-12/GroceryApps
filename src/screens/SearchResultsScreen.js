import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import ProductCard from '../components/ProductList/ProductCard';
import productApi from '../api/productApi';
import {useFocusEffect} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {FlatGrid} from 'react-native-super-grid';
import cartApi from '../api/cartApi';
import {AuthContext} from '../context/AuthContext';
import moment from 'moment';
import { SearchResultsHeading } from '../components/Heading';

const SearchResultsScreen = ({navigation, route}) => {
  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  const {nameProduct} = route.params;

  const {userInfo} = useContext(AuthContext);

  const {
    users: {userID},
  } = userInfo;

  const fetchProductListApi = async productName => {
    const productList = await productApi.findProductByName(productName);
    setProductList(productList);
    // console.log('Log: ', productList);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchProductListApi(nameProduct);
    }, []),
  );

  const handlePressDetails = id => {
    console.log(id);
    navigation.navigate('ProductDetails', {id});
  };

  const handleAddCart = async productID => {
    console.log('Log', productID);
    await cartApi.createCart({productID, userID, quantity: 1});
  };

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <View style={[ {backgroundColor: '#fff'} ]} >
      <SearchResultsHeading />

      {productList.length > 0 ? (
        <FlatGrid
          itemDimension={120}
          data={productList}
          style={styles.gridView}
          spacing={10}
          renderItem={({item}) => (
            <View style={[]}>
              <TouchableOpacity
                onPress={() => handlePressDetails(item.productID)}>
                <SafeAreaView style={styles.container}>
                  <View>
                    <View style={styles.centerImg}>
                      <Image
                        source={{uri: item.imageURL}}
                        style={styles.imageProduct}
                      />
                    </View>

                    <Text style={styles.nameProduct}> {item.productName} </Text>
                    <Text style={[styles.common, styles.unit]}>
                      {item.unit}
                    </Text>
                    <Text style={[styles.common, styles.unit]}>
                      HSD: {moment(item.expirationDate).format('DD-MM-YYYY')}
                    </Text>
                    <Text style={[styles.common, styles.unit]}>
                      Số lượng: {item.quantity}
                    </Text>

                    <View style={[styles.inline]}>
                      <Text style={[styles.common, styles.price]}>
                        {item.price}
                      </Text>

                      <TouchableOpacity
                        style={[styles.btnAdd]}
                        onPress={() => handleAddCart(item.productID)}>
                        <Image
                          source={require('../assets/images/IconAddProduct.png')}
                          style={styles.iconAdd}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </SafeAreaView>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>Không tìm thấy sản phẩm</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    // marginBottom: '50%',
  },

  nameList: {
    fontSize: 20,
    color: '#181725',
    paddingTop: 15,
  },

  container: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
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
    width: 120,
    height: 180,
    resizeMode: 'contain',
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
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    // marginBottom: 20,
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

export default SearchResultsScreen;
