import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dataProduct } from './data';

import CardSilder from 'react-native-cards-slider';


const ProductList = () => {

    return (
        <View style={styles.wrapper} >
            <CardSilder  >
                {
                    dataProduct.map((items, index) =>
                    (
                        <>
                            <SafeAreaView style={styles.container} key={index} >
                                <View  >
                                    <View style={styles.centerImg} >
                                        <Image source={items.imgProduct} key={index} style={styles.imageProduct} />
                                    </View>

                                    <Text style={styles.nameProduct} > {items.nameProduct} </Text>
                                    <Text style={[styles.common, styles.unit] } >{items.unit}</Text>

                                    <View style={[styles.inline]} >
                                        <Text style={[styles.price ]} >{items.price}</Text>

                                        <TouchableOpacity style={[styles.btnAdd]} >
                                            <Image source={items.icon} key={index} style={styles.iconAdd} />
                                        </TouchableOpacity>

                                    </View>

                                </View>
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
        paddingVertical: 10,
        paddingHorizontal: 10,
        
    },

    common: {
        marginLeft: 25,

    },

    centerImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageProduct: {
        // width: '20%',
        // height: '40%',
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },

    nameProduct: {
        color: '#181725',
        fontSize: 18,
        letterSpacing: 0.1,
        fontWeight: '700',
        marginLeft: 20,
    },

    unit: {
        // textAlign: 'center',
        color: '#7C7C7C',
        fontSize: 14,
        marginTop: 5,
    },

    inline: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 20,
        marginTop: 30,

    },

    price: {
        color: '#181725',
        fontWeight: 'bold',
        fontSize: 18,
    },

    btnAdd: {
        backgroundColor: '#53B175',
        borderRadius: 17,
        paddingHorizontal: 14.33,
        paddingVertical: 14.33
    },

    iconAdd: {
        width: 17,
        height: 17,
    }

})

export default ProductList