import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DropdownList from '../../Orders/DropdownList';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {AuthContext} from '../../../context/AuthContext';
import orderApi from '../../../api/orderApi';

const Checkbox = ({checked, onCheck, orderID}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onCheck(!checked, orderID)}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const OrdersItem = ({item}) => {
  return (
    <View>
      <Text>Tình trạng: {item.orderStatus == 0 ? 'Chưa giao' : 'Đã giao'}</Text>
      <Text>Tổng giá tiền: {item.totalPrice}</Text>
      <Text>
        Ngày tạo đơn hàng: {moment(item.orderDate).format('DD-MM-YYYY')}
      </Text>
      <Text>
        Ngày giao hàng:{' '}
        {item.deliveryDate
          ? moment(item.deliveryDate).format('DD/MM/YYYY HH:mm')
          : 'Trống'}
      </Text>
    </View>
  );
};

const OrderAdmin = () => {
  const [loading, setLoading] = useState(true);

  const [checkTab, setCheckTab] = useState(0);

  const {userInfo} = useContext(AuthContext);

  const {users} = userInfo;

  const [orders, setOrders] = useState([]);

  const handleCheckTab = tab => {
    // console.log('Tab', tab);
    setCheckTab(tab);
  };

  const fecthAllOrderListApi = async orderStatus => {
    const userOrderList = await orderApi.getAllUserOrders(orderStatus);
    setOrders(
      userOrderList.map(item => {
        return {
          ...item,
          checked: false,
        };
      }),
    );

    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fecthAllOrderListApi(checkTab);
    }, [checkTab]),
  );

  const handleOnCheck = (checked, id) => {
    const newOrderList = [...orders];
    const index = newOrderList.findIndex(item => item.orderID === id);
    if (index === -1) return;

    const newOrder = {
      ...newOrderList[index],
      checked,
    };

    newOrderList[index] = newOrder;

    setOrders(newOrderList);
  };

  const handleOrdered = async () => {
    try {
      await orderApi.updateListOrderStatus(
        orders
          .filter(item => item.checked)
          .map(item => {
            return {
              orderID: item.orderID,
            };
          }),
      );
    } catch (error) {
      console.error(error);
    } finally {
      fecthAllOrderListApi(checkTab);
    }
  };

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <View style={[{backgroundColor: '#fff'}]}>
      {/* <DropdownList /> */}

      <View style={[styles.container]}>
        <TouchableOpacity
          style={[
            styles.btnTab,
            {backgroundColor: checkTab === 0 ? '#53B175' : '#fff'},
          ]}
          onPress={() => handleCheckTab(0)}>
          <Text style={[{fontSize: 16, textAlign: 'center'}]}>Chưa giao</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnTab,
            {backgroundColor: checkTab === 1 ? '#53B175' : '#fff'},
          ]}
          onPress={() => handleCheckTab(1)}>
          <Text style={[{fontSize: 16, textAlign: 'center'}]}>Đã giao</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {orders.length > 0 ? (
          <View style={[{marginVertical: 20}]}>
            {orders.map((item, index) => (
              <View key={index} style={[styles.container, styles.ordersItem]}>
                <OrdersItem item={item} />
                {item.orderStatus == 0 && (
                  <Checkbox
                    checked={item.checked}
                    onCheck={handleOnCheck}
                    orderID={item.orderID}
                  />
                )}
              </View>
            ))}

            {checkTab == 0 && (
              <TouchableOpacity
                style={styles.btnCheckout}
                onPress={handleOrdered}>
                <Text style={styles.textCheckout}>Hoàn tất</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Danh sách đơn hàng trống
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ordersItem: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  btnTab: {
    width: '50%',
    borderWidth: 2,
    paddingVertical: 10,
  },

  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checked: {
    backgroundColor: 'black',
  },

  checkmark: {
    color: 'white',
    fontSize: 16,
  },

  label: {
    marginLeft: 8,
    fontSize: 16,
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

export default OrderAdmin;
