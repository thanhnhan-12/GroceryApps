import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import SelectDateTime from '../SelectDateTime';

const FormImport = () => {
  const windowHeight = Dimensions.get('window').height;

  const [wareHouseID, setWareHouseID] = useState(null);

  const [wareHouseName, setWareHouseName] = useState(null);

  const [importQuantity, setImportQuantity] = useState(null);

  const [exportQuantity, setExportQuantity] = useState(null);

  const [stockQuantity, setStockQuantity] = useState(null);

  const [dateImport, setDateImport] = useState(null);

  const [dateExport, setDateExport] = useState(null);

  return (
    <View style={[styles.commonInputs, {height: windowHeight}]}>
      <View style={[styles.commonInput]}>
        <Text style={styles.label}>Nhập mã kho hàng</Text>
        <TextInput
          placeholder={'Nhập mã kho hàng'}
          keyboardType={'default'}
          value={wareHouseID}
          onChangeText={text => setWareHouseID(text)}
          secureTextEntry={false}
          style={[styles.input]}
        />
      </View>

      <View style={[styles.commonInput]}>
        <Text style={styles.label}>Nhập tên kho hàng</Text>
        <TextInput
          placeholder={'Nhập tên kho hàng'}
          keyboardType={'default'}
          value={wareHouseName}
          onChangeText={text => setWareHouseName(text)}
          secureTextEntry={false}
          style={[styles.input]}
        />
      </View>

      <View>

      </View>

      <View style={[styles.commonInput]}>
        <View style={[styles.inline]}>
          <Text style={styles.label}>Số lượng nhập: </Text>
          <TextInput
            placeholder={'Số lượng nhập'}
            keyboardType={'default'}
            value={importQuantity}
            onChangeText={number => setImportQuantity(number)}
            secureTextEntry={false}
            style={[styles.input, { width: '50%' }]}
          />
        </View>

        <View style={[styles.inline]}>
          <Text style={styles.label}>Số lượng xuất:  </Text>
          <TextInput
            placeholder={'Số lượng xuất'}
            keyboardType={'default'}
            value={exportQuantity}
            onChangeText={number => setExportQuantity(number)}
            secureTextEntry={false}
            style={[styles.input, { width: '50%' }]}
          />
        </View>

        <View style={[styles.inline]}>
          <Text style={styles.label}>Số lượng tồn:    </Text>
          <TextInput
            placeholder={'Số lượng tồn'}
            keyboardType={'default'}
            value={stockQuantity}
            onChangeText={number => setStockQuantity(number)}
            secureTextEntry={false}
            style={[styles.input, { width: '50%' }]}
          />
        </View>
      </View>

      <View>
        <SelectDateTime/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  commonInputs: {
    marginLeft: 20,
    marginBottom: 30,
  },

  commonInput: {
    marginTop: 20,
  },

  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
  },

  input: {
    height: 45,
    marginTop: 6,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    backgroundColor: '#F2F2F2',
  },
});

export default FormImport;
