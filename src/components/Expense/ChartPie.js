import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {PieChart} from 'react-native-chart-kit';

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const hexColor =
    '#' + red.toString(16) + green.toString(16) + blue.toString(16);
  return hexColor;
}

const ChartPie = ({userTop}) => {
  const data = userTop.map(item => {
    return {
      name: item.fullName,
      population: Number(item.totalOrders),
      color: randomColor(),
    };
  });
  // {
  //   name: 'Moscow',
  //   population: 11920000,
  //   color: 'rgb(0, 0, 255)',
  //   legendFontColor: '#7F7F7F',
  //   legendFontSize: 15,
  // },

  const chartConfig = {
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
      // r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={[{paddingBottom: 0, height: 300}]}>
      <Text style={[styles.heading]}>Thông kê số lượng người mua</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width}
        height={150}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        // paddingLeft={'15'}
        // center={[10, 50]}
        absolute
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

export default ChartPie;
