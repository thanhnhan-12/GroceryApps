import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataExplore} from './DataExplore';

import {FlatGrid} from 'react-native-super-grid';

import {useNavigation} from '@react-navigation/native';
import exploreApi from '../../api/exploreApi';

const ExploreList = () => {
  const navigation = useNavigation();

  const handlePressForwardExploreDetails = id => {
    console.log(id);
    navigation.navigate('ExploreDetailsScreen');
  };

  const [explore, setExplore] = useState([]);

  const fetchExploreApi = async () => {
    const renderExplore = await exploreApi.explore();
    setExplore(renderExplore.categoryList);
    console.log('Log ' + JSON.stringify(renderExplore));
  };

  useEffect(() => {
    fetchExploreApi();
  }, [])

  return (
    <ScrollView>
      <FlatGrid
        itemDimension={130}
        data={explore}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <ScrollView>
            <View style={[styles.itemContainer]}>
              <TouchableOpacity
                onPress={() => handlePressForwardExploreDetails(item.id)}
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
          </ScrollView>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
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
