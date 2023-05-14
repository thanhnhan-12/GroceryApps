import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native';
import GroceriesList from './GroceriesList';

const Groceries = ({categoryList}) => {

  // console.log({categoryList});

  const ItemSeparator = () => <View style={{width: 20}} />;

  return (
    <View style={[styles.wrapper]}>
      <View style={[styles.gridView]} >
        <FlatList
          contentContainerStyle={{paddingRight: 15,  }}
          ItemSeparatorComponent={ItemSeparator}
          data={categoryList}
          style={styles.gridView}
          horizontal
          renderItem={({item}) => <GroceriesList cards={item} /> }
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gridView: {
    marginLeft: 10,
  },
  
  wrapper: {
    marginTop: 20,
  },
});

export default Groceries