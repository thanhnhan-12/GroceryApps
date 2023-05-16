import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import deliveryApi from '../../api/deliveryApi';

const DropdownProvince = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [province, setProvince] = useState([]);

  const fetchApiProvince = async () => {
    const renderProvince = await deliveryApi.province();
    setProvince(renderProvince.provinceList);
    // console.log('Log ' + JSON.stringify(renderProvince));
  };

  useEffect(() => {
    console.log("Fetch !");
    fetchApiProvince();
  }, []);

  const dataProvince = province.map((item) => ({
    label: item.nameProvince,
    value: item.provinceID,
  }));

  // console.log("Data ", dataProvince);

  useEffect(() => {
    console.log("Selected value: ", value);
  }, [value]);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataProvince}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Chọn Tỉnh/ Thành' : '...'}
        searchPlaceholder="Tìm kiếm..."
        value={value ? value.value : null}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
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
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
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

export default DropdownProvince;
