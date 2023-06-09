import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import DropdownList from './DropdownList';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {AuthContext} from '../../context/AuthContext';
import orderApi from '../../api/orderApi';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {formatPrice} from '../Heading';


const OrdersItem = ({item}) => {
  return (
    <View>
      <Text>Tình trạng: {item.orderStatus == 0 ? 'Chưa giao' : 'Đã giao'}</Text>
      <Text>Tổng giá tiền: {formatPrice(Number(item.totalPrice))}</Text>
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

const Orders = () => {
  const [loading, setLoading] = useState(true);

  const {userInfo} = useContext(AuthContext);

  const {users} = userInfo;

  const [orders, setOrders] = useState([]);

  const fecthOrderListApi = async userID => {
    const orderList = await orderApi.getAllOrders(userID);
    setOrders(orderList);
    // console.log('Log: ', orderList);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fecthOrderListApi(users.userID);
    }, []),
  );

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <View style={[{backgroundColor: '#fff'}]}>
      <DropdownList />

      <ScrollView>
        {orders.length > 0 ? (
          <View style={[ { marginBottom: '48%' } ]} >
            {orders.map((item, index) => (
              <View key={index} style={[styles.ordersItem]}>
                <OrdersItem item={item} />
              </View>
            ))}
          </View>
        ) : (
          <Text>Danh sách đơn hàng trống</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ordersItem: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Orders;
