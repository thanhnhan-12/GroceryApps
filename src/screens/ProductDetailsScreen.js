import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import BannerProductDetails from '../components/ProductDetails/BannerProductDetails';
import AddFavourite from '../assets/SVG/AddFavourite.svg';
import IconIn from '../assets/SVG/iconIncrease.svg';
import IconDe from '../assets/SVG/iconDecrease.svg';

const ProductDetails = () => {
  const [amount, setAmount] = useState(1);

  const handleAmountIncrease = () => {
    setAmount(() => amount + 1);
  };

  const handleAmountDecrease = () => {
    setAmount(() => amount - 1);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Banner */}
        <View>
          <BannerProductDetails />
        </View>

        {/* Details */}
        <View style={[styles.container]}>
          {/* Name: Tên sản phẩm  */}
          <View style={[styles.heading]}>
            <Text style={[styles.nameHeading]}>Coca Cola</Text>
            <TouchableOpacity>
              <AddFavourite style={[styles.common, styles.iconHeading]} />
            </TouchableOpacity>
          </View>

          <Text style={[styles.common, styles.unit]}>350ml</Text>

          {/* Price: Giá   */}
          <View style={[styles.heading, styles.money ]} > 
            {/* Button Decrease - Increase */}
            <View style={[styles.heading, styles.btnAmount  ]} >
              <TouchableOpacity onPress={handleAmountDecrease} disabled={amount === 1 && true } style={[styles.btnDecrease]} >
                <IconDe />
              </TouchableOpacity>

              <Text style={[styles.amount]} >{amount}</Text>

              <TouchableOpacity onPress={handleAmountIncrease}>
                <IconIn />
              </TouchableOpacity>
            </View>

            {/* Money */}
            <Text>220,000VNĐ</Text>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 25,
  },

  common: {
    color: '#7C7C7C',
  },

  heading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameHeading: {
    color: '#181725',
    fontSize: 24,
  },

  iconHeading: {},

  unit: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
  },

  money: {
    marginTop: 30.14,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 30.4,
  },

  btnAmount:{
    paddingRight: 100,
  },

  btnDecrease: {
  },

  btnIncrease: {

  },

  amount: {
    color: '#181725',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: '#E2E2E2',
    paddingHorizontal: 19.38,
    paddingVertical: 13.83,
  },

});

export default ProductDetails;
