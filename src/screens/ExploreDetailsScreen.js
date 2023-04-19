import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import BackArrow from '../assets/SVG/IconBackArrow.svg';
import IconFilter from '../assets/SVG/IconFilter.svg';
import Filter from '../components/Filter/Filter';
import { dataProduct } from '../components/ProductList/data';
import SearchBar from '../components/SearchBar';

const ExploreDetailsScreen = () => {

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

  const handlePressFilters = (id) => {
    console.log(id);
    navigation.navigate('Filter');
  }

  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Tất cả');

  
  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
  };

  const handleFilterClose = () => {
    setFilterVisible(false);
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}} >
      <View style={[styles.inline, {paddingHorizontal: 15,} ]} >
        <TouchableOpacity onPress={() => handlePressBackExplore() } >
          <BackArrow/>
        </TouchableOpacity>

        <Text style={[styles.nameList,  ]} >Nước giải khát </Text>

        <TouchableOpacity onPress={() => setFilterVisible(true)} >
          <IconFilter/>
    
        </TouchableOpacity>

      </View>

      <SearchBar />

      <Filter
        visible={isFilterVisible} 
        onClose={handleFilterClose} 
        onSelectFilter={handleFilterSelect} 
      />

      <FlatGrid
        itemDimension={120}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <ScrollView>
            <View style={[ ]} >
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

export default ExploreDetailsScreen;
