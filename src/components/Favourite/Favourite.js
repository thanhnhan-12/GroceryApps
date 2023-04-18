import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {dataProduct} from '../ProductList/data';

const Favourite = () => {
  const [myfavourite, setMyFavourite] = useState(dataProduct);

  return (
    <View>
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

      {myfavourite.map((items, index) => (
        <>
          <View style={[styles.common, styles.border]} key={index}>
            <Image style={[styles.imgProduct]} source={items.imgProduct} />

            <View
              style={[
                {
                  marginVertical: 30,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <View style={[{marginLeft: 10}]}>
                <Text style={[styles.nameProduct]}>{items.nameProduct}</Text>
                <Text>{items.unit}</Text>
              </View>
              <Text style={[styles.price]}>{items.price}</Text>
            </View>
          </View>
        </>
      ))}

      <TouchableOpacity style={styles.btnCheckout}>
        <Text style={styles.textCheckout}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  common: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,

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
    fontSize: 14,
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
});

export default Favourite;
