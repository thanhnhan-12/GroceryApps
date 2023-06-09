import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {BarChart} from 'react-native-chart-kit';

const ChartBar = ({dataProduct}) => {
  const data = {
    labels: dataProduct.map(item => item.productName),
    datasets: [
      {
        data: dataProduct.map(item => Number(item.totalSold)),
      },
    ],
  };

  return (
    <View style={[{marginBottom: 20}]}>
      <Text style={[styles.heading]}>Thông kê sản phẩm bán chạy</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
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
        bar
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

export default ChartBar;
