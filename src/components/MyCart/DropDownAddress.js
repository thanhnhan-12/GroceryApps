import React, {useContext, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';

const DropDownAddress = ({dataAddress, idAddress, onChangeValue}) => {

  return (
    <View style={[styles.container, ]} >
      <Dropdown
        style={[styles.dropdown, ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataAddress}
        // maxHeight={300}
        labelField="userNameAddress"
        valueField="userAddressID"
        placeholder={'Chọn'}
        value={idAddress}
        onChange={item => {
          onChangeValue(item.userAddressID);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // padding: 16,
    // width: '100%',
  },

  dropdown: {
    // height: 50,
    // paddingVertical: 50,
    // paddingHorizontal: 40,
    // marginLeft: -40,
    width: 200,
  },

  placeholderStyle: {
    fontSize: 18,
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropDownAddress;
