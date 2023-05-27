import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {dataTitleAdmin} from './DataTitleAdmin';

const Admin = () => {
  const [titleAdmin, setTitleAdmin] = useState(dataTitleAdmin);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={[{backgroundColor: '#fff'}]}>
      <Text style={[styles.txtHeading, styles.colors ]}>Admin!</Text>

      {titleAdmin.map((items, index) => (
        <>
          <TouchableOpacity style={[styles.inline1]}
            onPress={id => {
              if (items.id === 1) {
                navigation.navigate('AccountAdmin');
              }

              if (items.id === 2) {
                navigation.navigate('');
              }

              if (items.id === 3) {
                navigation.navigate('');
              }

              if (items.id === 4) {
                navigation.navigate('ProductAdmin');
              }

              if (items.id === 5) {
                navigation.navigate('');
              }

              if (items.id === 6) {
                navigation.navigate('WareHouse');
              }
            }}
          >
            <View>{items.iconRepresent}</View>

            <View style={[styles.inline2]}>
              <Text style={[styles.textTitle, styles.colors]}>
                {items.title}
              </Text>
              {items.iconArrow}
            </View>
          </TouchableOpacity>
        </>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txtHeading: {
    fontSize: 24,
    marginVertical: 24,
    marginLeft: 24,
  },

  colors: {
    color: '#181725',
  },

  inline1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  inline2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 18,
    // marginLeft: 20.49,
  },

});

export default Admin;
