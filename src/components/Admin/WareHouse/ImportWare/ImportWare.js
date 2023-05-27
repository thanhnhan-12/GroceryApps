import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import IconBackArrow from '../../../../assets/SVG/IconBackArrow.svg';
import {useNavigation} from '@react-navigation/native';
import FormImport from './FormImport';

const ImportWare = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaView>
      <View style={[styles.flex]}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminScreen') }>
          <IconBackArrow />
        </TouchableOpacity>
        <Text style={[styles.textAdd]}>Nhập hàng</Text>
        <Text>{hidden}</Text>
      </View>

      <FormImport />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  textAdd: {
    fontSize: 20,
    fontWeight: '900',
    color: '#181725',
  },
});

export default ImportWare;
