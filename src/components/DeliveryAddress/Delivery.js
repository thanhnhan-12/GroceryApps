import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import DropdownList from './DropdownList';

const Delivery = () => {
  const [address, setAddress] = useState(null);

  return (
    <View>
      <View>
        <Text>Nhập địa chỉ</Text>
        <TextInput
          placeholder={'Nhập địa chỉ'}
          keyboardType={'default'}
          value={address}
          onChangeText={text => setAddress(text.trim())}
          secureTextEntry={true}
        />
      </View>

      

    </View>
  );
};

const styles = StyleSheet.create({

})

export default Delivery;
