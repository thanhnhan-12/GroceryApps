import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SwipeableFavourite from '../../../Favourite/SwipeableFavourite';

const RemoveProduct = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SwipeableFavourite />
      </ScrollView>

      <TouchableOpacity style={styles.btnCheckout}>
        <Text style={styles.textCheckout}>Xoá sản phẩm</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

export default RemoveProduct;
