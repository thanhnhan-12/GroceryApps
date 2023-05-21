import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {dataGroceries} from './data';
import categoryApi from '../../api/categoryApi';

const GroceriesList = ({cards}) => {
  const {categoryImage, categoryName} = cards;

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={[styles.container]}>
        <TouchableOpacity>
          <View style={[styles.grocery]}>
            <Image style={styles.imageProduct} source={{uri: categoryImage}} />

            <Text style={styles.nameGroceries}>{categoryName}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},

  container: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
  },

  grocery: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imageProduct: {
    width: '100%',
    height: 140,
    // resizeMode: 'cover',
    marginHorizontal: 140,
    marginTop: -1,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  nameGroceries: {
    color: '#3E423F',
    fontWeight: '600',
    fontSize: 20,
    // marginRight: 86.34,
    // marginLeft: 10,
    marginVertical: 50,
  },
});

export default GroceriesList;
