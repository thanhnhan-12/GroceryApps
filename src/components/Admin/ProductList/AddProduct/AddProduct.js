import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconBackArrow from '../../../../assets/SVG/IconBackArrow.svg';
import FormAddProduct from './FormAddProduct';

const AddProduct = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaView>
      <View style={[styles.flex]}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminScreen') } >
          <IconBackArrow />
        </TouchableOpacity>
        <Text style={[styles.textAdd]}>Thêm mới sản phẩm</Text>
        <Text>{hidden}</Text>
      </View>

      <FormAddProduct />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  textAdd: {
    fontSize: 20,
    fontWeight: '900',
    color: '#181725',
  },
});

export default AddProduct;
