import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MyCart from '../components/MyCart/MyCart';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from '../components/MyCart/Payment';

const CartScreen = () => {
  return (
   
      <View>
        <View style={[styles.header, {backgroundColor: '#fff'}]}>
          <Text style={styles.headerText}>Giỏ hàng</Text>
        </View>
        <View>
          <MyCart />
        </View>

        {/* <ScrollView contentContainerStyle={styles.scrollContainer}>
        <MyCart />
      </ScrollView> */}

        {/* <TouchableOpacity style={styles.btnCheckout}>
        <Text style={styles.textCheckout}>Thanh toán</Text>
      </TouchableOpacity> */}
      </View>
  );
};

const styles = StyleSheet.create({
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

  header: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  scrollContainer: {
    flexGrow: 1,
  },

  textCheckout: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default CartScreen;
