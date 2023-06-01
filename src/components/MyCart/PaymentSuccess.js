import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PaymentSuccess = () => {
  const navigation = useNavigation();


  return (
    <View>
      <View style={[ { alignItems:'center', marginVertical: 60 } ]} >
        <Image source={require('../../assets/images/PaymentSuccessImg.png')} style={[ styles.imgSuccess ]} />
      </View>

      <View style={[ { marginTop: 40 } ]} >
        <Text style={[ styles.titleAccepted ]} >Đơn hàng của bạn đã được chấp nhận</Text>

        <TouchableOpacity style={styles.btnCheckout} onPress={() => navigation.navigate('CartScreen') }>
          <Text style={styles.textCheckout}>Trở về</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  imgSuccess: {
    // width: '65%',
    // height: '68%'
  },

  titleAccepted: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: '#181725',
  },

  btnCheckout: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '95%',
    paddingVertical: '4%',
    marginVertical: 35,
    marginLeft: 10,
  },

  textCheckout: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },

});

export default PaymentSuccess;
