import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import ImportWare from './ImportWare/ImportWare';
import ExportWare from './ExportWare/ExportWare';

const WareHouse = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Nhập hàng hoá'},
    {key: 'second', title: 'Xuất hàng hoá'},
    {key: 'third', title: 'Cập nhật sản phẩm'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <ImportWare />;
      // case 'second':
      //   return <ExportWare />;
      // case 'third':
      //   return <View style={{flex: 1, backgroundColor: 'red'}} />;
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

export default WareHouse;
