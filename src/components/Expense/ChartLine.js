import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

const ChartLine = ({totalPriceMonth}) => {
  console.log(totalPriceMonth?.map(item => 'Tháng ' + item.month));
  const data = {
    labels: totalPriceMonth?.map(item => 'Tháng ' + item.month),
    datasets: [
      {
        data: totalPriceMonth?.map(item => parseInt(item.totalAmount)),
      },
    ],
  };

  console.log({data});

  return (
    <View style={[{marginBottom: 20}]}>
      <Text style={[styles.heading]}>Thông kê tổng tiền</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="VND"
        yAxisSuffix="VND"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default ChartLine;
