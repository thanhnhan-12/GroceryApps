import React, {Fragment, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import IconDe from '../../../assets/SVG/iconDecrease.svg';
import IconIn from '../../../assets/SVG/iconIncrease.svg';
import IconRemove from '../../../assets/SVG/IconRemove.svg';
import Checkbox from '../../CheckBoxTrash/Checkbox';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import cartApi from '../../../api/cartApi';
import {AuthContext} from '../../../context/AuthContext';
import IconTrashRemoveItems from '../../../assets/SVG/IconTrashRemoveItems.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import productApi from '../../../api/productApi';
import moment from 'moment';

const ProductItem = ({item}) => {
  const windowHeight = Dimensions.get('window').height;

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity>
        <View style={[styles.common, styles.border]}>
          <Image style={[styles.imgProduct]} source={{uri: item.imageURL}} />

          <View
            style={[
              styles.common,
              {flex: 1, justifyContent: 'space-between', paddingHorizontal: 25},
            ]}>
            <View style={[{marginVertical: 10}]}>
              <View style={[{marginLeft: -5, marginRight: 0}]}>
                <Text style={[styles.nameProduct]}>{item.productName}</Text>
                <Text>
                  Ngày nhập:{' '}
                  {item.importDate
                    ? moment(item.importDate).format('DD-MM-YYYY')
                    : 'Chưa nhập'}
                </Text>
                <Text>Số lượng nhâp: {item.quantity}</Text>

                <Text>{item.price}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={[{marginLeft: 40}]}
              onPress={() =>
                navigation.navigate('FormEditProduct', {
                  productID: item.productID,
                })
              }>
              <View>
                <AntDesign name="edit" size={28} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ProductList = () => {
  const windowHeight = Dimensions.get('window').height;

  const [loading, setLoading] = useState(true);

  const [listProduct, setListProduct] = useState([]);

  const navigation = useNavigation();

  const fetchListAllProductApi = async () => {
    const listAllProduct = await productApi.getListAllProduct();
    setListProduct(listAllProduct);
    // console.log('Log: ', listAllProduct);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchListAllProductApi();
    }, []),
  );

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <ScrollView>
      <View>
        {listProduct.length > 0 ? (
          <>
            {listProduct.map((item, index) => (
              <Fragment key={index}>
                <ProductItem item={item} />
              </Fragment>
            ))}
          </>
        ) : (
          <Text>Danh sách sản phẩm trống</Text>
        )}

        <TouchableOpacity
          style={styles.btnCheckout}
          onPress={() => navigation.navigate('FormAddProduct')}>
          <Text style={styles.textCheckout}>Thêm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  common: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  border: {
    borderTopWidth: 1,
    borderTopColor: '#E1CECE',
    borderBottomWidth: 1,
    borderBottomColor: '#E1CECE',
  },

  imgProduct: {
    width: 80,
    height: 65,
    resizeMode: 'center',
  },

  nameProduct: {
    fontSize: 16,
    color: '#181725',
  },

  unit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 14,
  },

  textAmount: {
    // marginHorizontal: 17.45,
  },

  price: {
    fontSize: 14,
    color: '#181725',
    // marginTop: 30,
  },

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

  // Hidden Items
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBFFEB',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
});

export default ProductList;
