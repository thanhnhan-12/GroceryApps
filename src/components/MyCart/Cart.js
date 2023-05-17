import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {dataProduct} from '../ProductList/data';
import IconDe from '../../assets/SVG/iconDecrease.svg';
import IconIn from '../../assets/SVG/iconIncrease.svg';
import IconRemove from '../../assets/SVG/IconRemove.svg';
import Checkbox from '../CheckBoxTrash/Checkbox';
import cartApi from '../../api/cartApi';

const renderHiddenItem = ({item}) => (
  <View style={styles.rowBack}>
    <TouchableOpacity
      style={[styles.rowCheckbox]}
      onPress={() => {
        console.log(`Left action for item with key: ${item.key}`);
      }}>
      <Checkbox />
    </TouchableOpacity>
  </View>
);

const Cart = ({card}) => {
  // const data = dataProduct;

  // const {
  //   productID,
  //   imageURL,
  //   productName,
  //   unit,
  //   price,
  //   expirationDate,
  //   // quantity,
  // } = card;

  const [products, setProducts] = useState(1);

  const [cart, setCart] = useState([]);

  const fetchCartApi = async () => {
    const renderCart = await cartApi.cart();
    setCart(renderCart.cartList);
    console.log('Log ' + JSON.stringify(renderCart));
  };

  useEffect(() => {
    fetchCartApi();
  }, []);

  const handleIncreaseQuantity = productId => {
    setProducts(prevState => {
      return prevState.map(product => {
        if (product.id === productId) {
          return {...product, quantity: product.quantity + 1};
        }
        return product;
      });
    });
  };

  const handleDecreaseQuantity = productId => {
    setProducts(prevState => {
      return prevState.map(product => {
        if (product.id === productId && product.quantity > 0) {
          return {...product, quantity: product.quantity - 1};
        }
        return product;
      });
    });
  };

  const renderItem = ({item, index}) => (
    <View style={[styles.common, styles.border]} key={index}>
      <Image style={[styles.imgProduct]} source={{uri: item.imageURL}} />

      <View style={[styles.common, {marginVertical: 30}]}>
        <View style={[{marginLeft: 18, marginRight: 20}]}>
          <Text style={[styles.nameProduct]}>{item.productName}</Text>
          <Text>{item.unit}</Text>
          <View style={[{flex: 1, flexDirection: 'row', alignItems: 'center'}]}>
            <TouchableOpacity
              style={[styles.btnDeIn]}
              onPress={() => handleDecreaseQuantity(item.id)}>
              <Text>
                <IconDe />
              </Text>
            </TouchableOpacity>

            <Text style={[styles.textAmount]}>{item.quantity}</Text>

            <TouchableOpacity
              style={[styles.btnDeIn]}
              onPress={() => handleIncreaseQuantity(item.id)}>
              <Text>
                <IconIn />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{}]}>
          <TouchableOpacity style={[{marginLeft: 64}]}>
            <Text>
              <IconRemove />
            </Text>
          </TouchableOpacity>

          <Text style={[styles.price]}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SwipeListView
      data={cart}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75} 
    />
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
    marginTop: 50,
  },

  // Hidden Items
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EBFFEB',
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
});

export default Cart;
