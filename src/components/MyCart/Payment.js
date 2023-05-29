import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import IconCloseFilter from '../../assets/SVG/IconCloseFilter.svg';
import IconArrowNext from '../../assets/SVG/IconArrowNext.svg';
import {useNavigation} from '@react-navigation/native';
import DropDownAddress from './DropDownAddress';

import deliveryApi from '../../api/deliveryApi';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useFocusEffect} from '@react-navigation/native';

const Payment = ({visible, onClose, onSelectFilter, totalCost}) => {
  const navigation = useNavigation();

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

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={[styles.common, styles.headingPayment]}>
            <Text style={[styles.titlePayment]}>Thanh toán</Text>
            <TouchableOpacity onPress={onClose}>
              <IconCloseFilter />
            </TouchableOpacity>
          </View>

          <View>
            <View style={[styles.common, styles.padding]}>
              {/* <Text style={[styles.textLeft]}>Địa chỉ giao hàng</Text> */}

              <TouchableOpacity style={[styles.common]}>
                <Text >
                  <DropDownAddress dataAddress={addressList} />
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.common, styles.padding]}>
              <Text style={[styles.textLeft]}>Tổng chi phí</Text>

              <Text style={[styles.textRight]}>{totalCost} VNĐ</Text>
            </View>

            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={'handlePayment'}>
              <Text style={styles.textCheckout}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  modalContent: {
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '55%',
  },

  common: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  paymentBox: {
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  headingPayment: {
    paddingHorizontal: 25,
    marginVertical: 29,
  },

  padding: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: 'rgba(226, 226, 226, 0.7)',
  },

  titlePayment: {
    fontWeight: 700,
    fontSize: 24,
    color: '#000',
  },

  textLeft: {
    fontWeight: 600,
    fontSize: 18,
    color: '#7C7C7C',
  },

  textRight: {
    color: '#181725',
    // marginRight: 12,
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

export default Payment;
