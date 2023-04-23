import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { dataProduct } from '../../components/ProductList/data';


const ProductCard = () => {

  const [items, setItems] = useState(dataProduct);

  const route = useRoute();

  const navigation = useNavigation();

  const handlePressBackExplore = (id) => {
    console.log(id);
    navigation.navigate('ExploreScreen')
  }

  const handlePressDetails = id => {
    console.log(id);
    navigation.navigate('ProductDetails');
  };


  return (
    <View style={{flex: 1, backgroundColor: '#fff'}} >

      <FlatList
        contentContainerStyle={{paddingRight: 25}}
        data={items}
        style={styles.gridView}
        spacing={20}
        horizontal
        renderItem={({item}) => (
          <View style={[{}]} >
            <View style={[ ]} >
            <TouchableOpacity
              style={[{marginLeft: 40, marginHorizontal: 50, }]}
              onPress={() => handlePressDetails(items.id)}
              key={items.id}>
              <SafeAreaView style={styles.container} >
                <View>
                  <View style={styles.centerImg}>
                    <Image
                      source={item.imgProduct}
                      style={styles.imageProduct}
                    />
                  </View>

                  <Text style={styles.nameProduct}> {item.nameProduct} </Text>
                  <Text style={[styles.common, styles.unit]}>{item.unit}</Text>

                  <View style={[styles.inline]}>
                    <Text style={[styles.common, styles.price]}>{item.price}</Text>

                    <TouchableOpacity style={[styles.btnAdd]}>
                      <Image
                        source={item.icon}
                        style={styles.iconAdd}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>
            </TouchableOpacity>
            </View>
          </View>
        )}
        
      />

    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
      marginLeft: -20,
  },

  nameList: {
    fontSize: 20,
    color: '#181725',
    paddingTop: 15,
  },

  container: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
    width: '140%',
    height: '100%',
  },

  common: {
    marginLeft: 20,
  },

  centerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageProduct: {
    width: 120,
    height: 180,
    resizeMode: 'contain',
  },

  nameProduct: {
    color: '#181725',
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: '700',
    marginLeft: 15,
  },

  unit: {
    color: '#7C7C7C',
    fontSize: 14,
    marginTop: 5,
  },

  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 20,
  },

  price: {
    color: '#181725',
    fontWeight: 'bold',
    fontSize: 12,
  },

  btnAdd: {
    backgroundColor: '#53B175',
    borderRadius: 17,
    paddingHorizontal: 14.33,
    paddingVertical: 14.33,
    marginRight: 15,
  },

  iconAdd: {
    width: 17,
    height: 17,
  },

});

export default ProductCard;
