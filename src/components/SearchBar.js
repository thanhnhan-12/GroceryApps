import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({value, updateSearch, style}) {
  const [query, setQuery] = useState();
  const [error, setError] = useState();

  const navigation = useNavigation();

  const [nameProduct, setNameProduct] = useState();

  return (
    <View style={[styles.container, {marginTop: '10%'}]}>
      <View style={styles.searchContainer}>
        {/* <View style={styles.vwSearch}>
          <Image
            style={styles.icSearch}
            source={require('../assets/Icons/IconSearch.png')}
          />
        </View> */}

        <TextInput
          value={query}
          placeholder="Tìm kiếm"
          style={styles.textInput}
          onChangeText={text => {
            var letters = /^$|^[a-zA-Z._\b ]+$/;
            if (text.length > 12) setError('Query too long.');
            else if (text.match(letters)) {
              setNameProduct(text);
              updateSearch(text);
              if (error) setError(false);
            } else setError('Please only enter alphabets');
          }}
        />
        {nameProduct ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SearchResultsScreen', {nameProduct})
            }
            style={styles.vwClear}>
            <AntDesign name="search1" size={25} color="#000" />
          </TouchableOpacity>
        ) : (
          <View style={styles.vwClear} />
        )}
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  txtError: {
    marginTop: '20%',
    width: '89%',
    color: 'white',
  },

  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    // backgroundColor: 'green',
    flex: 1,
    paddingLeft: 22,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    // backgroundColor: 'red'
  },

  icSearch: {
    height: 18,
    width: 18,
  },

  searchContainer: {
    backgroundColor: '#F2F3F2',
    width: '90%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 15,
  },

  container: {
    height: 80,
    alignItems: 'center',
    // height: '100%', width: '100%'
  },
});
