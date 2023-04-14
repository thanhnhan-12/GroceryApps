import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'

import Shop from '../assets/SVG/ShopBar.svg'
import Explore from '../assets/SVG/ExploreBar.svg'
import Cart from '../assets/SVG/CartBar.svg'
import Favourite from '../assets/SVG/FavouriteBar.svg'
import Account from '../assets/SVG/AccountBar.svg'

const dataBar = [
    {
        iconBar: <Shop width={30} height={30} />,
        nameBar: 'Shop'
    },

    {
        iconBar: <Explore width={30} height={30} />,
        nameBar: 'Explore'
    },

    {
        iconBar: <Cart width={30} height={30} />,
        nameBar: 'Cart',
    },

    {
        iconBar: <Favourite width={30} height={30} />,
        nameBar: 'Favourite',
    },

    {
        iconBar: <Account width={30} height={30} />,
        nameBar: 'Account'
    },

]

const NavigationBar = () => {
    const [isColorSelected, isSetColorSelected] = useState(false);

    const handleColorSelectedPress = () => {
        isSetColorSelected(true);
    };

    return (
        <SafeAreaView style={[styles.wrapper]} >
            {
                dataBar.map((items, index) =>
                (
                    <>
                        <SafeAreaView style={[styles.container]} key={index} >
                            <TouchableOpacity onPress={handleColorSelectedPress} >
                                <Text style={[styles.common, styles.iconBars, {color: isColorSelected ? '#181725' : '#53B175'}  ]}  >{items.iconBar}</Text>

                                <Text style={[styles.common, styles.nameBars, {color: isColorSelected ? '#181725' : '#53B175'} ]} >{items.nameBar}</Text>
                            </TouchableOpacity>

                        </SafeAreaView>
                    </>
                )
                )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderColor: 'transparent',

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },

        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 1,

    },

    container: {

    },

    common: {
        color: '#181725',
        textAlign: 'center'
    },

    iconBars: {
        // width: 22.8,
        // height: 22.8,
    },

    nameBars: {
        fontSize: 12,
    },

})

export default NavigationBar