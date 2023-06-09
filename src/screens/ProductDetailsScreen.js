import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddFavourite from '../assets/SVG/AddFavourite.js';
import BannerProductDetails from '../components/ProductDetails/BannerProductDetails';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import IconDe from '../assets/SVG/iconDecrease.svg';
import IconIn from '../assets/SVG/iconIncrease.svg';
import {StarRatings} from '../components/ReviewStar/Star';
import productApi from '../api/productApi.js';
import cartApi from '../api/cartApi.js';
import {AuthContext} from '../context/AuthContext.js';
import {Toast} from 'react-native-toast-message/lib/src/Toast.js';
import { formatPrice } from '../components/Heading/index.js';


const ProductDetails = ({navigation, route}) => {
  const [amount, setAmount] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [detail, setDetail] = useState([]);
  const {id} = route.params;
  console.log('ID: ', id);
  const [loading, setLoading] = useState(true);

  const {productDetail, images} = detail;

  const {userInfo} = useContext(AuthContext);

  const {token, users} = userInfo;

  const handleIncreaseQuantity = async productID => {
    if (amount === productDetail.quantity) {
      Alert.alert('Vượt quá số lượng');
    } else {
      setAmount(amount + 1);
    }
  };

  const handleDecreaseQuantity = async productID => {
    setAmount(amount - 1);
  };

  const handleAddCart = async productID => {
    await cartApi.createCart({productID, userID: users.userID, quantity: amount});
    Toast.show({
      type: 'success',
      text1: 'Sản phẩm đã được thêm vào giỏ hàng',
      visibilityTime: 3000,
    });
  };

  // Expanded Test
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const fetchProductDetailApi = async productID => {
    const {productDetail, images} = await productApi.productDetail(productID);
    setDetail({productDetail, images});
    // console.log({productDetail, images});
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetailApi(id);
  }, []);

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        {/* Banner */}
        <View>
          <BannerProductDetails imageURL={images} />
        </View>

        {/* Details */}
        <View style={[styles.container]}>
          {/* Name: Tên sản phẩm  */}
          <View style={[styles.heading]}>
            <Text style={[styles.nameHeading]}>
              {productDetail.productName}
            </Text>
            <AddFavourite />
          </View>

          <Text style={[styles.common, styles.unit]}>{productDetail.unit}</Text>

          {/* Price: Giá   */}
          <View style={[styles.heading, styles.money, styles.borderBottom]}>
            {/* Button Decrease - Increase */}
            <View style={[styles.heading, styles.btnAmount]}>
              <TouchableOpacity
                onPress={handleDecreaseQuantity}
                disabled={amount === 1}
                style={[styles.btnDecrease]}>
                <IconDe />
              </TouchableOpacity>

              <Text style={[styles.amount]}>{amount}</Text>

              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <IconIn />
              </TouchableOpacity>
            </View>

            {/* Money */}
            <Text>{formatPrice(Number(productDetail.price))}</Text>
          </View>

          <View style={[{marginTop: 18.05}, styles.borderBottom]}>
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
              {productDetail.productDescription}
            </Text>
          </View>

          <View
            style={[{marginTop: 18.05}, styles.borderBottom, styles.heading]}>
            <Text style={[styles.productDetail]}>Đánh giá </Text>
            <StarRatings />
          </View>

          <TouchableOpacity
            onPress={() => handleAddCart(id)}
            style={styles.btnAddCart}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: '#FFF9FF',
                textAlign: 'center',
              }}>
              Thêm vào giỏ hàng
            </Text>
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
