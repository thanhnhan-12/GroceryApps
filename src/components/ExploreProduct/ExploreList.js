import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataExplore} from './DataExplore';

import {FlatGrid} from 'react-native-super-grid';

const ExploreList = () => {
  const [items, setItems] = React.useState(dataExplore);

  return (
    <ScrollView>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <ScrollView>
            <View style={[styles.itemContainer]}>
              <TouchableOpacity
                style={[
                  styles.container,
                  {backgroundColor: item.bgColor},
                  {alignItems: 'center', justifyContent: 'center'},
                ]}>
                <Image
                  style={[styles.imgExploreList]}
                  source={item.imgExplore}
                />
                <Text style={[styles.nameExploreList]}>{item.nameExplore}</Text>
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
