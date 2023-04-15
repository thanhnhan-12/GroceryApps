import React from 'react'
import { Image, SafeAreaView, Text, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import CardSilder from 'react-native-cards-slider';
import { dataGroceries } from './data';


const GroceriesList = () => {
    return (
        <View style={styles.wrapper} >
            <CardSilder autoplay interval={4000} >
                {
                    dataGroceries.map((items, index) =>
                    (
                        <>
                            <SafeAreaView style={styles.container} key={index} >
                                <TouchableOpacity>

                                    <View style={[styles.grocery ]} >
                                        <Image style={styles.imageProduct} source={items.imgGroceries} />

                                        <Text style={styles.nameGroceries} >{items.nameGroceries}</Text>
                                    </View>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </>
                    )
                    )

                }

            </CardSilder>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20
    },

    container: {
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 18,
        // paddingVertical: 10,
        // paddingHorizontal: 10,

    },

    grocery: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imageProduct: {
        // width: '20%',
        // height: '40%',
        width: 140,
        height: 160,
        resizeMode: 'contain',
    },

    nameGroceries: {
        color: '#3E423F',
        fontWeight: '600',
        fontSize: 20,
        marginRight: 86.34,
    },

})

export default GroceriesList