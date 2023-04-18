import React from 'react';
import BackArrow from '../assets/SVG/IconBackArrow.svg';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {dataProduct} from '../components/ProductList/data';
import {useNavigation} from '@react-navigation/native';
import ProductList from '../components/ProductList/ProductList';
import ProductCard from '../components/ProductList/ProductCard';
import IconFilter from '../assets/SVG/IconFilter.svg';
import SearchBar from '../components/SearchBar';
import { useRoute } from '@react-navigation/native';

const ExploreDetailsScreen = ({i}) => {
  const [items, setItems] = React.useState(dataProduct);

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
    <ScrollView style={{backgroundColor: '#fff'}} >
      <View style={[styles.inline, {paddingHorizontal: 15,} ]} >
        <TouchableOpacity onPress={() => handlePressBackExplore() } >
          <BackArrow/>
        </TouchableOpacity>

        <Text style={[styles.nameList,  ]} >Nước giải khát </Text>

        <TouchableOpacity>
          <IconFilter/>
        </TouchableOpacity>


      </View>

      <SearchBar />

      <FlatGrid
        itemDimension={120}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <ScrollView>
            <View style={[styles.itemContainer]} >
            <TouchableOpacity
              // onPress={() => handlePressDetails(items.id)}
              key={items.id}>
              <SafeAreaView style={styles.container} >
                <View>
                  <View style={styles.centerImg}>
                    <Image
                      source={item.imgProduct}
                      // key={index}
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
                        // key={index}
                        style={styles.iconAdd}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>
            </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameList: {
    fontSize: 20,
    color: '#181725',
    paddingTop: 15,
  },

  container: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
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
    // textAlign: 'center',
    color: '#7C7C7C',
    fontSize: 14,
    marginTop: 5,
  },

  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    // paddingHorizontal: 20,
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

export default ExploreDetailsScreen;
