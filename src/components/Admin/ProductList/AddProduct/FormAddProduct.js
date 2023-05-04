import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const FormAddProduct = () => {
  const [nameProduct, setNameProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);

  return (
    <View style={[styles.commonInputs]}>
      <View style={[styles.commonInput]}>
        <Text style={styles.label}>Nhập tên sản phẩm</Text>
        <TextInput
          placeholder={'Nhập tên sản phẩm'}
          keyboardType={'default'}
          value={nameProduct}
          onChangeText={text => setNameProduct(text)}
          secureTextEntry={true}
          style={[styles.input]}
        />
      </View>

      <View style={[styles.commonInput]}>
        <Text style={styles.label}>Nhập đơn vị</Text>
        <TextInput
          placeholder={'Nhập đơn vị'}
          keyboardType={'default'}
          value={unit}
          onChangeText={text => setUnit(text)}
          secureTextEntry={true}
          style={[styles.input]}
        />
      </View>

      <View style={[styles.commonInput]}>
        <Text style={styles.label}>Nhập giá tiền</Text>
        <TextInput
          placeholder={'Nhập giá tiền'}
          keyboardType={'default'}
          value={price}
          onChangeText={text => setPrice(text)}
          secureTextEntry={true}
          style={[styles.input]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commonInputs: {
    marginLeft: 20,
    marginBottom: 30,
  },

  commonInput: {
    marginTop: 20,
  },

  label: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
  },

  input: {
    height: 45,
    marginTop: 6,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    backgroundColor: '#F2F2F2',
  },
});

export default FormAddProduct;
