import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import IconCloseFilter from '../../assets/SVG/IconCloseFilter.svg';
import IconArrowNext from '../../assets/SVG/IconArrowNext.svg';
import {useNavigation} from '@react-navigation/native';
import DropDownAddress from './DropDownAddress';

import deliveryApi from '../../api/deliveryApi';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useFocusEffect} from '@react-navigation/native';
import cartApi from '../../api/cartApi';
import {formatPrice} from '../Heading';

const Payment = ({visible, onClose, onSelectFilter, totalCost, cart}) => {
  const navigation = useNavigation();

  const {userInfo} = useContext(AuthContext);

  const {users} = userInfo;

  const [addressList, setAddressList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [idAddress, setIDAddress] = useState('');

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

  const handlePayment = async () => {
    if (addressList.length === 0) {
      Alert.alert('Chưa có địa chỉ', 'Bạn có muốn thêm địa chỉ không ?', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('DeliveryScreen'),
        },
        {
          text: 'Huỷ',
          style: 'cancel',
        },
      ]);
    } else if (!idAddress) {
      Alert.alert('Bạn chưa chọn địa chỉ');
    } else {
      await cartApi.payments({
        totalPrice: totalCost,
        userID: users.userID,
        productCart: cart.map(item => {
          return {
            productID: item.productID,
            quantity: item.quantity,
            cartID: item.cartID,
          };
        }),
        userAddressID: idAddress
      });
      navigation.navigate('PaymentSuccess');
    }
  };

  const handleOnChangeValue = idAddress => {
    setIDAddress(idAddress);
  };

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
              <Text style={[styles.textLeft]}>Chọn địa chỉ</Text>

              <TouchableOpacity style={[styles.common]}>
                <Text>
                  <DropDownAddress
                    dataAddress={addressList}
                    onChangeValue={handleOnChangeValue}
                    idAddress={idAddress}
                  />
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.common, styles.padding]}>
              <Text style={[styles.textLeft]}>Số điện thoại</Text>
              <Text style={[styles.textRight]}> {users.phone} </Text>
            </View>

            <View style={[styles.common, styles.padding]}>
              <Text style={[styles.textLeft]}>Tổng chi phí</Text>

              <Text style={[styles.textRight]}>
                {formatPrice(Number(totalCost))}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={handlePayment}>
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
    height: '62%',
  },

  common: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    display: 'flex',
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
