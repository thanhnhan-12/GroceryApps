import React, {useState} from 'react';
import {TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import DropdownProvince from './DropdownProvince';
import DropdownDistrict from './DropdownDistrict';
import DropdownWard from './DropdownWard';
import IconBackArrow from '../../assets/SVG/IconBackArrow.svg';
import { DeliveryHeading } from '../Heading';


const Delivery = () => {
  const [address, setAddress] = useState(null);

  return (
    <View style={[styles.container]}>
      <DeliveryHeading />

      <ScrollView style={[{ marginTop: 20 }]} >
        <View>
          <Text style={styles.label}>Nhập địa chỉ</Text>
          <TextInput
            placeholder={'Nhập địa chỉ'}
            keyboardType={'default'}
            value={address}
            onChangeText={text => setAddress(text.trim())}
            secureTextEntry={true}
            style={[styles.input]}
          />
        </View>

        <View>
          <Text style={[styles.label, styles.common]}>Chọn Tỉnh/ Thành</Text>
          <DropdownProvince />
        </View>

        <View>
          <Text style={[styles.label, styles.common]}>Chọn Quận/ Huyện</Text>
          <DropdownDistrict />
        </View>

        <View>
          <Text style={[styles.label, styles.common]}>Chọn Phường/ Xã</Text>
          <DropdownWard />
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textLogin}>Cập nhật</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },

  label: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 500,
  },

  input: {
    height: 50,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
  },

  common: {
    marginVertical: 16,
  },

  btnLogin: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    paddingVertical: '4%',
    marginTop: 35,
    marginBottom: 75,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },

});

export default Delivery;
