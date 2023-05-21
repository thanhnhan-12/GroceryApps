import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {dataProduct} from '../ProductList/data';
import IconDe from '../../assets/SVG/iconDecrease.svg';
import IconIn from '../../assets/SVG/iconIncrease.svg';
import IconRemove from '../../assets/SVG/IconRemove.svg';
import Checkbox from '../CheckBoxTrash/Checkbox';
import Trash from '../CheckBoxTrash/Trash';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import cartApi from '../../api/cartApi';
import {AuthContext} from '../../context/AuthContext';

import {useFocusEffect} from '@react-navigation/native';

const renderHiddenItem = ({item}) => (
  <View style={styles.rowBack}>
    <TouchableOpacity
      style={[styles.rowCheckbox]}
      onPress={() => {
        console.log(`Left action for item with key: ${item.key}`);
      }}>
      <Checkbox />
    </TouchableOpacity>

    {/* Remove Items */}
    <TouchableOpacity
      style={[styles.rowCheckbox]}
      onPress={() => {
        console.log(`Left action for item with key: ${item.key}`);
      }}>
      <Trash />
    </TouchableOpacity>
  </View>
);

const Cart = ({card}) => {
  const [products, setProducts] = useState(1);

  const [cart, setCart] = useState([]);

  const {userInfo} = useContext(AuthContext);

  const {token, users} = userInfo;

  const [loading, setLoading] = useState(true);

  const fetchCartApi = async userID => {
    const {cartList} = await cartApi.cart(userID);
    setCart(cartList);
    // console.log('Log ' + JSON.stringify({cartList}));
    setLoading(false);
  };

  // useEffect(() => {
  //   console.log('000');
  //   fetchCartApi(users.userID);

  //   return () => {
  //     console.log('Return cart');
  //     setCart([]);
  //   };
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchCartApi(users.userID);
    }, []),
  );

  const handleIncreaseQuantity = async productID => {
    try {
      await cartApi.createCart({productID, userID: users.userID, quantity: 1});
      fetchCartApi(users.userID);
    } catch (error) {
      console.log('Err ', error);
    }
  };

  const handleDecreaseQuantity = async productID => {
    console.log("ID ", productID, users.userID);
    try {
      await cartApi.decreaseQuantity({
        productID,
        userID: users.userID,
        quantity: 1,
      });
      fetchCartApi(users.userID);
    } catch (error) {
      console.log('Err ', error);
    }
  };

  const renderItem = ({item, index}) => (
    <>
      <View style={[styles.common, styles.border]} key={index}>
        <Image style={[styles.imgProduct]} source={{uri: item.imageURL}} />

        <View style={[{marginVertical: 10}]}>
          <View style={[{marginLeft: 18, marginRight: 20}]}>
            <Text style={[styles.nameProduct]}>{item.productName}</Text>
            <Text>{item.unit}</Text>
            <View
              style={[{flex: 1, flexDirection: 'row', alignItems: 'center'}]}>
              <TouchableOpacity
                style={[styles.btnDeIn]}
                onPress={() => handleDecreaseQuantity(item.productID)}>
                <Text>
                  <IconDe />
                </Text>
              </TouchableOpacity>

              <Text style={[styles.textAmount]}>{item.quantity}</Text>

              <TouchableOpacity
                style={[styles.btnDeIn]}
                onPress={() => handleIncreaseQuantity(item.productID)}>
                <Text>
                  <IconIn />
                </Text>
              </TouchableOpacity>

              <View style={[{marginLeft: 50}]}>
                <Text style={[styles.price]}>{item.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <>
      {cart.length > 0 ? (
        <SwipeListView
          data={cart}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          leftOpenValue={75}
        />
      ) : (
        // <ScrollView>

        // </ScrollView>
        <Text> Giỏ hàng trống </Text>
      )}
    </>
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
    height: 64.69,
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
    marginHorizontal: 17.45,
  },

  btnDeIn: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 17,
    width: 45.67,
    height: 45.67,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13.42,
  },

  price: {
    fontSize: 14,
    color: '#181725',
    marginTop: 30,
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

export default Cart;
