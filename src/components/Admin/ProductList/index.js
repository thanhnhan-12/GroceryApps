import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import AddProduct from './AddProduct/AddProduct';

const FirstRoute = () => <AddProduct />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: 'red'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const ProductListAdmin = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Thêm sản phẩm'},
    {key: 'second', title: 'Xoá sản phẩm'},
    {key: 'third', title: 'Cập nhật sản phẩm'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProductListAdmin;
