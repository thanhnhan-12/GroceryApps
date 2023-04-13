import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SliderBox } from 'react-native-image-slider-box'



const Banner = () => {
    const images = [
        require('../assets/Icons/BannerSlide1.jpg'),
        require('../assets/Icons/BannerSlide2.jpg'),
        require('../assets/Icons/BannerSlide3.jpg'),
    ]

    return (
        <View  >
            <SliderBox images={images} dotColor="red" inactiveDotColor="#000"
                dotStyle={{ height: 15, width: 15, borderRadius: 50 }}
                autoplay={true} autoplayInterval={10000}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // marginLeft: 23.5,
        // marginRight: 23.5
    }
})

export default Banner