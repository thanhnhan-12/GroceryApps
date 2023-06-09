import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import ChartPie from './ChartPie';
import {RevenueHeading, formatPrice} from '../Heading';
import adminApi from '../../api/adminApi';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useFocusEffect} from '@react-navigation/native';

const Expense = () => {
  const [data, setData] = useState({});
  const {totalAmount, totalPriceMonth, dataProduct, userTop} = data;
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const {totalAmount, totalPriceMonth, dataProduct, userTop} =
        await adminApi.getStatistical();
      setData({totalAmount, totalPriceMonth, dataProduct, userTop});
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  if (isLoading) return <Spinner visible={isLoading} />;

  return (
    <ScrollView>
      <RevenueHeading />
      <View style={[styles.box]}>
        <Text style={[styles.text]}>Tổng doanh thu tháng 6</Text>
        <Text style={[styles.text, styles.txtPrice]}>
          {formatPrice(Number(data.totalAmount))}
        </Text>
      </View>
      <View>
        <ChartLine totalPriceMonth={totalPriceMonth} />
        <ChartBar dataProduct={dataProduct} />
        <ChartPie userTop={userTop} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 20,
  },

  text: {
    textAlign: 'center',
  },

  txtTotal: {},

  txtPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: 'red',
  },
});

export default Expense;
