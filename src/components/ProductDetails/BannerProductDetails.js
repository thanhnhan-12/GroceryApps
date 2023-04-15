import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {dataProductDetails} from '../ProductDetails/DataBannerProductDetails';
import {SliderBox} from 'react-native-image-slider-box';

const BannerProductDetails = () => {
  return (
    <View style={[styles.container]} >
      <SliderBox
        images={dataProductDetails}
        dotColor="red"
        inactiveDotColor="#000"
        dotStyle={{height: 15, width: 15, borderRadius: 50}}
        autoplay={true}
        autoplayInterval={10000}
        sliderBoxHeight={350}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A5F2A5',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
});

export default BannerProductDetails;
