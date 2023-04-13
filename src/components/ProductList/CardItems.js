import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { data } from './data'


const CardItems = () => {
    console.log(data)
    return (
        <View  >
            {
                data.map((items, index) =>
                (
                    <>
                        <SafeAreaView style={styles.container} key={index} >
                            <Image source={items.imgProduct} key={index} style={styles.imageProduct} />
                            <Text style={styles.nameProduct} > {items.nameProduct} </Text>
                            <Text>{items.unit}</Text>
                            <Text>{items.price}</Text>
                        </SafeAreaView>
                    </>
                )

                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 18,
    },

    imageProduct: {
        // width: '20%',
        // height: '40%',
    },

    nameProduct: {
        color: '#181725',
        fontSize: 18,
        letterSpacing: 0.1,
        fontWeight: '700'
    }

})

export default CardItems