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
    <SafeAreaView style={[ {backgroundColor: '#fff'} ]} >
      <Text style={[styles.txtHeading]}>Admin!</Text>

      {titleAdmin.map((items, index) => (
        <>

        <TouchableOpacity>
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
    fontSize: 24
  },
});

export default Admin;
