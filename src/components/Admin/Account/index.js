import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import productApi from '../../../api/productApi';
import moment from 'moment';
import adminApi from '../../../api/adminApi';

const AccountItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity>
        <View style={[styles.common, styles.border]}>
          <View
            style={[
              styles.common,
              {flex: 1, justifyContent: 'space-between', paddingHorizontal: 25},
            ]}>
            <View style={[{marginVertical: 10}]}>
              <View style={[{marginLeft: -5, marginRight: 0}]}>
                <Text style={[styles.nameProduct]}>
                  Họ và tên: {item.fullName}
                </Text>
                <Text style={[styles.nameProduct]}>
                  Tên người dùng: {item.userName ? '' : 'Chưa nhập'}
                </Text>
                <Text style={[styles.nameProduct]}>Email: {item.email}</Text>
              </View>
            </View>

            <TouchableOpacity style={[{marginLeft: 40}]} onPress={() => navigation.navigate('FormEditAccount')} >
              <View>
                <AntDesign name="edit" size={28} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const AccountList = () => {
  const [loading, setLoading] = useState(true);

  const [listUser, setListUser] = useState([]);

  const navigation = useNavigation();

  const fetchListAllUserApi = async () => {
    const userList = await adminApi.getAllUser();
    setListUser(userList);
    // console.log('Log: ', userList);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchListAllUserApi();
    }, []),
  );

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <ScrollView>
      <View>
        {listUser.length > 0 ? (
          <>
            {listUser.map((item, index) => (
              <View key={index}>
                <AccountItem item={item} />
              </View>
            ))}
          </>
        ) : (
          <Text>Danh sách tài khoản trống</Text>
        )}

        <TouchableOpacity
          style={styles.btnCheckout}
          onPress={() => navigation.navigate('FormAddAccount')}>
          <Text style={styles.textCheckout}>Thêm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  common: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  border: {
    borderTopWidth: 1,
    borderTopColor: '#E1CECE',
    borderBottomWidth: 1,
    borderBottomColor: '#E1CECE',
  },

  nameProduct: {
    fontSize: 16,
    color: '#181725',
  },

  unit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 14,
  },

  textAmount: {
    // marginHorizontal: 17.45,
  },

  price: {
    fontSize: 14,
    color: '#181725',
    // marginTop: 30,
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

export default AccountList;
