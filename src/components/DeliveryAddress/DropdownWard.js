import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';

const DropdownWard = ({dataWard, wardID, onChangeValue}) => {
  console.log({wardID, dataWard});
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataWard}
        search
        maxHeight={300}
        labelField="nameWard"
        valueField="WardsID"
        placeholder={'Chọn Phường/ Xã'}
        searchPlaceholder="Tìm kiếm..."
        value={wardID}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={item => {
          console.log('Log: ', item);
          onChangeValue(item.WardsID);
        }}
        renderLeftIcon={() => (
          <Feather
            style={styles.icon}
            // color={isFocus ? 'blue' : 'black'}
            name="map-pin"
            size={20}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  icon: {
    marginRight: 5,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  placeholderStyle: {
    fontSize: 16,
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

export default DropdownWard;
