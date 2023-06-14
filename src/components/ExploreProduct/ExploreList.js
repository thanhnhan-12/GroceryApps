import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';

import {useNavigation} from '@react-navigation/native';
import exploreApi from '../../api/exploreApi';

const ExploreList = () => {
  const navigation = useNavigation();

  const handlePressForwardExploreDetails = (id, categoryName) => {
    // console.log(id);
    navigation.navigate('ExploreDetailsScreen', {id, categoryName});
  };

  const [explore, setExplore] = useState([]);

  const fetchExploreApi = async () => {
    const renderExplore = await exploreApi.explore();
    setExplore(renderExplore.categoryList);
    // console.log('Log ' + JSON.stringify(renderExplore));
  };

  useEffect(() => {
    fetchExploreApi();
  }, []);

  return (
    <SafeAreaView>
      <FlatGrid
        data={explore}
        style={styles.gridView}
        spacing={10}
        keyExtractor={item => item.categoryID}
        renderItem={({item}) => (
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              onPress={() =>
                handlePressForwardExploreDetails(
                  item.categoryID,
                  item.categoryName,
                )
              }
              style={[
                styles.container,
                {backgroundColor: item.categoryColor},
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Image
                style={[styles.imgExploreList]}
                source={{uri: item.categoryImage}}
              />
              <Text style={[styles.nameExploreList]}>{item.categoryName}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginBottom: '70%',

  },

  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    marginTop: 30,
  },

  container: {
    borderRadius: 18,
    paddingVertical: 40,
  },

  imgExploreList: {
    width: 111.38,
    height: 74.9,
  },

  nameExploreList: {
    color: '#181725',
    fontSize: 16,
    letterSpacing: 0.1,
    marginTop: 27,
  },
});

export default ExploreList;
