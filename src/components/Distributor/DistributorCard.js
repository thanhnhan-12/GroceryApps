import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import supplierApi from '../../api/SupplierApi';

const DistributorCard = () => {

  const [supplier, setSupplier] = useState([]);

  const fetchSupplierApi = async () => {
    const renderSupplier = await supplierApi.supplier();
    setSupplier(renderSupplier.supplierList);
    // console.log("Log " + JSON.stringify(renderSupplier));
  }

  useEffect(() => {
    fetchSupplierApi();
  }, [])

  return (
    <FlatList
      contentContainerStyle={[
        {marginTop: 10, marginLeft: 20, paddingRight: 25},
      ]}
      data={supplier}
      horizontal
      renderItem={({item}) => (
        <View>
          <TouchableOpacity style={[{marginRight: 15}]}>
            <Image source={{uri: item.suppImage }} style={[styles.imageLogo]} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});

export default DistributorCard;
