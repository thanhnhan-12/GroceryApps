import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SelectDateTime from '../SelectDateTime';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownCategory from '../DropDownCategory';
import exploreApi from '../../../../api/exploreApi';
import { useFocusEffect } from '@react-navigation/native';

const FormEditProduct = () => {
  const windowHeight = Dimensions.get('window').height;

  const [categoryID, setCategoryID] = useState('');

  const [nameProduct, setNameProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);
  const [] = useState(null);

  const [explore, setExplore] = useState([]);

  const fetchExploreApi = async () => {
    const renderExplore = await exploreApi.explore();
    setExplore(renderExplore.categoryList);
    // console.log('Log ' + JSON.stringify(renderExplore));
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchExploreApi();
    }, []),
  );

  return (
    <ScrollView>
      <View style={[styles.commonInputs, {}]}>
        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Nhập tên sản phẩm</Text>
          <TextInput
            placeholder={'Nhập tên sản phẩm'}
            keyboardType={'default'}
            value={nameProduct}
            onChangeText={text => setNameProduct(text)}
            secureTextEntry={false}
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
            secureTextEntry={false}
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
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View>
          <SelectDateTime label="Ngày Nhập" date="" />
        </View>

        <View>
          <SelectDateTime label="Ngày Sản xuất" />
        </View>

        <View>
          <SelectDateTime label="Hạn sử dụng" />
        </View>

        <View style={[ { marginTop: 20 } ]} >
          <Text style={styles.label}>Danh mục</Text>
          <DropDownCategory
            onChangeValue=""
            dataCategory={explore}
            category={categoryID}
          />
        </View>

        <View style={[{marginTop: 20}]}>
          <Text style={styles.label}>Hình ảnh</Text>

          <TouchableOpacity style={[styles.inline]}>
            <Ionicons name="add-circle-outline" size={60} color="black" />
            <Text>Upload Hình ảnh</Text>
          </TouchableOpacity>

          <Image
            style={[styles.imgProduct]}
            source={require('../../../../assets/images/cocaColaGro.png')}
          />
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={''}>
          <Text style={styles.textLogin}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  commonInputs: {
    marginHorizontal: 20,
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    backgroundColor: '#F2F2F2',
  },

  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },

  imgProduct: {
    // width: 80,
    // height: 65,
    // resizeMode: 'center',
    marginTop: 20,
  },

  btnLogin: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    paddingVertical: '4%',
    marginTop: 25,
    // marginBottom: 0,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default FormEditProduct;
