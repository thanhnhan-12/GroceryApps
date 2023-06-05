import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import BackArrow from '../assets/SVG/IconBackArrow.svg';
import IconFilter from '../assets/SVG/IconFilter.svg';
import Filter from '../components/Filter/Filter';
import {dataProduct} from '../components/ProductList/data';
import SearchBar from '../components/SearchBar';
import categoryApi from '../api/categoryApi';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import moment from 'moment';
import cartApi from '../api/cartApi';
import { AuthContext } from '../context/AuthContext';

const ExploreDetailsScreen = ({navigation, route}) => {
  const [items, setItems] = useState(dataProduct);

  const [exploreDetailType, setExploreDetailType] = useState([]);

  const [loading, setLoading] = useState(true);

  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Tất cả');

  const {id, categoryName} = route.params;
  console.log('ID: ', id);
  

  const {userInfo} = useContext(AuthContext);

  const {users: {userID}} = userInfo;

  const handlePressBackExplore = id => {
    console.log(id);
    navigation.navigate('ExploreScreen', {id});
  };

  const handlePressDetails = id => {
    console.log(id);
    navigation.navigate('ProductDetails', {id});
  };

  const handlePressFilters = id => {
    console.log(id);
    navigation.navigate('Filter');
  };

  const handleFilterSelect = filter => {
    setSelectedFilter(filter);
    setFilterVisible(false);
  };

  const handleFilterClose = () => {
    setFilterVisible(false);
  };

  const fetchExploreType = async categoryID => {
    const {categoryTypeList} = await categoryApi.categoryType(categoryID);
    setExploreDetailType(categoryTypeList);
    // console.log({categoryTypeList});
    setLoading(false);
  };

  useEffect(() => {
    fetchExploreType(id);
  }, [id]);

  const handleAddCart = async (productID) => {
    console.log("Log", productID);
    await cartApi.createCart({ productID, userID , quantity: 1 } )
  }

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={[{ backgroundColor: '#fff' }]} >
      <View style={[styles.inline, {paddingHorizontal: 15}]}>
        <TouchableOpacity onPress={() => handlePressBackExplore()}>
          <BackArrow />
        </TouchableOpacity>

        <Text style={[styles.nameList, ]}>{categoryName} </Text>

        <TouchableOpacity onPress={() => setFilterVisible(true)}>
          <IconFilter />
        </TouchableOpacity>
      </View>

      <SearchBar />

      <Filter
        visible={isFilterVisible}
        onClose={handleFilterClose}
        onSelectFilter={handleFilterSelect}
      />

      <>
        {exploreDetailType.length > 0 ? (
          <FlatGrid
            itemDimension={120}
            data={exploreDetailType}
            style={styles.gridView}
            spacing={10}
            renderItem={({item}) => (
              <View style={[]}>
                <TouchableOpacity
                onPress={() => handlePressDetails(item.productID)}
                >
                  <SafeAreaView style={styles.container}>
                    <View>
                      <View style={styles.centerImg}>
                        <Image
                          source={{uri: item.imageURL}}
                          style={styles.imageProduct}
                        />
                      </View>

                      <Text style={styles.nameProduct}>
                        {' '}
                        {item.productName}{' '}
                      </Text>
                      <Text style={[styles.common, styles.unit]}>
                        {item.unit}
                      </Text>
                      <Text style={[styles.common, styles.unit]}>
                        HSD: {moment(item.expirationDate).format('DD-MM-YYYY')}
                      </Text>
                      <Text style={[styles.common, styles.unit]}>
                        Số lượng: {item.quantity}
                      </Text>

                      <View style={[styles.inline]}>
                        <Text style={[styles.common, styles.price]}>
                          {item.price}
                        </Text>

                        <TouchableOpacity style={[styles.btnAdd]} onPress={() => handleAddCart(item.productID)}>
                          <Image
                            source={require('../assets/images/IconAddProduct.png')}
                            style={styles.iconAdd}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </SafeAreaView>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text> Không có sản phẩm </Text>
        )}
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginBottom: '50%',
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
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    // marginBottom: 20,
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
