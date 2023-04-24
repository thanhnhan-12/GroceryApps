import React from 'react';
import {dataProduct} from '../ProductList/data';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Trash from '../CheckBoxTrash/Trash';
import {SwipeListView} from 'react-native-swipe-list-view';
import Checkbox from '../CheckBoxTrash/Checkbox';


const renderHiddenItem = ({item}) => (
  <View style={styles.rowBack}>
    {/* Checkbox */}
    <TouchableOpacity
      style={[styles.rowCheckbox, ]}
      onPress={() => {
        console.log(`Left action for item with key: ${item.key}`);
      }}>
      <Checkbox/>
    </TouchableOpacity>

    {/* Remove Items */}
    <TouchableOpacity
      style={[styles.rowCheckbox, ]}
      onPress={() => {
        console.log(`Left action for item with key: ${item.key}`);
      }}>
      <Trash />
    </TouchableOpacity>
  </View>
);

const SwipeableFavourite = () => {
  const data = dataProduct;

  const renderItem = ({item, index}) => (
    <View style={[styles.common, styles.border]} key={index}>
      <Image style={[styles.imgProduct]} source={item.imgProduct} />

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
          <Text style={[styles.nameProduct]}>{item.nameProduct}</Text>
          <Text>{item.unit}</Text>
        </View>
        <Text style={[styles.price]}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SwipeListView
      data={data}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75} 
      leftOpenValue={75} 
    />
  );
};

const styles = StyleSheet.create({
  common: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
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

  price: {
    fontSize: 14,
    color: '#181725',
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

export default SwipeableFavourite;
