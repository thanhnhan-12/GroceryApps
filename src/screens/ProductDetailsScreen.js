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
import AddFavourite from '../assets/SVG/AddFavourite.js';

import IconIn from '../assets/SVG/iconIncrease.svg';
import IconDe from '../assets/SVG/iconDecrease.svg';
import IconArrowDown from '../assets/SVG/IconArrowDown.svg';
import IconArrowUp from '../assets/SVG/IconArrowUp.svg';
import Star, { StarRatings } from '../components/ReviewStar/Star';

const ProductDetails = () => {
  // Increase Or Decrease Amount
  const [amount, setAmount] = useState(1);

  const handleAmountIncrease = () => {
    setAmount(() => amount + 1);
  };

  const handleAmountDecrease = () => {
    setAmount(() => amount - 1);
  };

  // Expanded Test
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Set color for Star
  const [isStarred, setIsStarred] = useState(false);

  const handleStarPress = () => {
    setIsStarred(!isStarred);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
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
            <AddFavourite/>
          </View>

          <Text style={[styles.common, styles.unit]}>350ml</Text>

          {/* Price: Giá   */}
          <View style={[styles.heading, styles.money, styles.borderBottom ]}>
            {/* Button Decrease - Increase */}
            <View style={[styles.heading, styles.btnAmount]}>
              <TouchableOpacity
                onPress={handleAmountDecrease}
                disabled={amount === 1 && true}
                style={[styles.btnDecrease]}>
                <IconDe />
              </TouchableOpacity>

              <Text style={[styles.amount]}>{amount}</Text>

              <TouchableOpacity onPress={handleAmountIncrease}>
                <IconIn />
              </TouchableOpacity>
            </View>

            {/* Money */}
            <Text>220,000VNĐ</Text>
          </View>

          <View style={[{marginTop: 18.05 }, styles.borderBottom ]}>
            <View style={[styles.heading]}>
              <Text style={styles.productDetail}>Chi tiết sản phẩm</Text>
              <TouchableOpacity onPress={toggleExpanded}>
                <Text>{expanded ? 'Thu gọn' : 'Xem thêm'}</Text>
              </TouchableOpacity>
            </View>

            <Text
              numberOfLines={expanded ? undefined : 3}
              style={{
                textAlign: 'justify',
                color: '#7C7C7C',
                fontSize: 13,
                marginTop: 9.45,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eleifend, magna non commodo pretium, nulla augue
              scelerisque ex, ac bibendum metus velit vel augue. Suspendisse eu
              lacus ut tellus lobortis malesuada vel ac est. Donec ut urna odio.
              Ut venenatis nunc sed dignissim volutpat. Integer tristique neque
              eget tortor placerat, sit amet rhoncus urna euismod. Donec
              hendrerit purus id consequat luctus. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
              commodo nibh et risus consectetur commodo. Nullam sed nunc
              ullamcorper, pellentesque lorem vel, mattis lectus.
            </Text>
          </View>

          <View style={[{marginTop: 18.05 }, styles.borderBottom, styles.heading ]} >
              <Text style={[styles.productDetail]} >Đánh giá </Text>
              <StarRatings/>

              {/* <Star/> */}
          </View>
            
          <TouchableOpacity style={ styles.btnAddCart} >
              <Text style={{fontWeight: '600', fontSize: 18, color: '#FFF9FF', textAlign: 'center' }} >Thêm vào giỏ hàng</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 30.4,
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

  iconHeading: {
    color: 'red',
  },

  unit: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
  },

  money: {
    marginTop: 30.14,
    
  },

  btnAmount: {
    paddingRight: 100,
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

  productDetail: {
    color: '#181725',
    fontWeight: '600',
    fontSize: 16,
  },

  btnAddCart: {
    marginVertical: 44.64,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: 'transparent',
    paddingVertical: 15.5,
    backgroundColor: '#53B175',
  },

});

export default ProductDetails;
