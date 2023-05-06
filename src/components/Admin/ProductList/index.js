import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import AddProduct from './AddProduct/AddProduct';
import RemoveProduct from './RemoveProduct/RemoveProduct';

const ProductListAdmin = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Thêm sản phẩm'},
    {key: 'second', title: 'Xoá sản phẩm'},
    {key: 'third', title: 'Cập nhật sản phẩm'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <AddProduct />;
      case 'second':
        return <RemoveProduct />;
      case 'third':
        return <View style={{flex: 1, backgroundColor: 'red'}} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      swipeEnabled={false}
    />
  );
};

export default ProductListAdmin;
