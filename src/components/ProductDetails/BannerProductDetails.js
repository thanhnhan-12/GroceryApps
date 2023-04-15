import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { dataProductDetails } from '../ProductDetails/DataBannerProductDetails';
import BackArrow from '../../assets/SVG/IconBackArrow.svg'
import { useNavigation } from '@react-navigation/native';


const BannerProductDetails = () => {
  const navigation = useNavigation();


  const handlePressBackHome = (id) => {
      console.log(id);
      navigation.navigate('HomeScreen')
  }

  return (
    <View style={[styles.container]} >
      <TouchableOpacity style={{position: 'absolute', top: '10%', left: '8%', zIndex: 999 }} onPress={() => handlePressBackHome() } >
        <BackArrow/>
      </TouchableOpacity>

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
    position: 'relative'
  },
});

export default BannerProductDetails;
