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
import IconBackArrow from '../../assets/SVG/IconBackArrow.svg';
import {DeliveryHeading} from '../Heading';
import {useNavigation} from '@react-navigation/native';
import deliveryApi from '../../api/deliveryApi';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useFocusEffect} from '@react-navigation/native';


const AddressItem = ({address}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryEdit', { delivery: address  } ) } >
      <View style={[styles.addressItem]}>
        <Text style={[styles.nameAddress]}> {address.userNameAddress} </Text>
        <Text style={[styles.nameAddress]}> {address.nameProvince} </Text>
        <Text style={[styles.nameAddress]}> {address.nameDistrict} </Text>
        <Text style={[styles.nameAddress]}> {address.nameWard} </Text>
      </View>
    </TouchableOpacity>
  );
};

const Delivery = () => {
  const windowHeight = Dimensions.get('window').height;

  const {userInfo} = useContext(AuthContext);

  const {users} = userInfo;

  const [addressList, setAddressList] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchAddressListApi = async userID => {
    const renderAddressList = await deliveryApi.addressList(userID);
    setAddressList(renderAddressList);
    // console.log('Log: ', renderAddressList);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAddressListApi(users.userID);
    }, []),
  );

  const navigation = useNavigation();

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <View style={[styles.container, {height: windowHeight}]}>
      <DeliveryHeading />

      <ScrollView style={[{marginTop: 20}]}>
        {addressList.length > 0 ? (
          <>
            <View>
              {addressList.map(item => (
                <AddressItem address={item} />
              ))}
            </View>
          </>
        ) : (
          <Text>Danh sách địa chỉ trống</Text>
        )}

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate('UserAddress')}>
          <Text style={styles.textLogin}>Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  addressItem: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  nameAddress: {
    fontSize: 18,
    color: '#181725',
  },

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
    marginBottom: 125,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default Delivery;
