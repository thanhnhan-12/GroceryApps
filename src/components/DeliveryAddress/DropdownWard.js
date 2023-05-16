import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import deliveryApi from '../../api/deliveryApi';

const DropdownWard = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [ward, setWard] = useState([]);

  const fetchApiWard = async () => {
    const renderWard = await deliveryApi.ward();
    setWard(renderWard.wardList);
    // console.log('Log ' + JSON.stringify(renderWard));
  };

  useEffect(() => {
    console.log('Fetch !');
    fetchApiWard();
  }, []);

  const dataWard = ward.map(item => ({
    label: item.nameWard,
    value: item.WardsID,
  }));

  // console.log('Data ', dataWard);

  useEffect(() => {
    console.log('Selected value: ', value);
  }, [value]);

  return (
    <View >
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataWard}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Chọn Phường/ Xã' : '...'}
        searchPlaceholder="Tìm kiếm..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Feather
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
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
