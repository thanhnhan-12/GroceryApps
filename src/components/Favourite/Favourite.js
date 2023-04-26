import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { dataProduct } from '../ProductList/data';
import SwipeableFavourite from './SwipeableFavourite';

const Favourite = () => {
  const [myfavourite, setMyFavourite] = useState(dataProduct);

  return (
    <View style={[ {backgroundColor: '#fff'} ]} >
      <Text
        style={[
          {
            fontSize: 20,
            color: '#181725',
            marginVertical: 30,
            textAlign: 'center',
          },
        ]}>
        Ưa thích
      </Text>

      <SwipeableFavourite/>

      <TouchableOpacity style={styles.btnCheckout}>
        <Text style={styles.textCheckout}>Thêm vào giỏ hàng</Text>
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

export default Favourite;
