import React, {useContext, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import DropdownProvince from './DropdownProvince';
import DropdownDistrict from './DropdownDistrict';
import DropdownWard from './DropdownWard';
import IconBackArrow from '../../assets/SVG/IconBackArrow.svg';
import {AddressHeading} from '../Heading';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import deliveryApi from '../../api/deliveryApi';
import {AuthContext} from '../../context/AuthContext';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const UserAddress = () => {
  const windowHeight = Dimensions.get('window').height;
  const {userInfo} = useContext(AuthContext);
  const {users} = userInfo;

  const [address, setAddress] = useState(null);

  const [provinceID, setProvinceID] = useState('');

  const [districtList, setDistrictList] = useState([]);
  const [districtID, setDistrictID] = useState('');

  const [wardList, setWardList] = useState([]);
  const [wardID, setWardID] = useState('');

  const [provinceList, setProvinceList] = useState([]);

  const fetchApiDistrict = async () => {
    const renderdistrict = await deliveryApi.district();
    setDistrictList(renderdistrict.districtList);
  };

  const updateUserAddressApi = async () => {
    const userAddress = await deliveryApi.userAddress({
      userNameAddress: address,
      userID: users.userID,
      WardsID: wardID,
    });
    Toast.show({
      type: 'success',
      text1: 'Thêm địa chỉ thành công',
      visibilityTime: 3000,
    });
  };

  const fetchApiWard = async id => {
    const renderWard = await deliveryApi.ward(id);
    setWardList(renderWard.wardList);
  };

  const fetchApiProvince = async () => {
    const renderProvince = await deliveryApi.province();
    setProvinceList(renderProvince.provinceList);
  };

  const handleOnChangeDistrict = value => {
    setDistrictID(value);
  };
  const handleOnChangeWard = value => {
    setWardID(value);
  };

  useEffect(() => {
    fetchApiWard(districtID);
  }, [districtID]);

  useEffect(() => {
    fetchApiDistrict();
    fetchApiProvince();
  }, []);

  return (
    <View style={([styles.container], {height: windowHeight})}>
      <AddressHeading />

      <ScrollView style={[{marginTop: 20, paddingHorizontal: 16}]}>
        <View>
          <Text style={styles.label}>Nhập địa chỉ</Text>
          <TextInput
            placeholder={'Nhập địa chỉ'}
            keyboardType={'default'}
            value={address}
            onChangeText={text => setAddress(text)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View>
          <Text style={[styles.label, styles.common]}>Chọn Tỉnh/ Thành</Text>
          <DropdownProvince
            dataProvince={provinceList}
            // province={provinceList[0].provinceID}
          />
        </View>

        <View>
          <Text style={[styles.label, styles.common]}>Chọn Quận/ Huyện</Text>
          <DropdownDistrict
            onChangeValue={handleOnChangeDistrict}
            dataDistrict={districtList}
            district={districtID}
          />
        </View>

        <View>
          <Text style={[styles.label, styles.common]}>Chọn Phường/ Xã</Text>
          <DropdownWard
            dataWard={wardList}
            onChangeValue={handleOnChangeWard}
            wardID={wardID}
          />
        </View>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={updateUserAddressApi}>
          <Text style={styles.textLogin}>Thêm địa chỉ</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    marginTop: 55,
    marginBottom: 95,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default UserAddress;
