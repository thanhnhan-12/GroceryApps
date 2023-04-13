import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import Banner from '../components/Banner'
import CardItems from '../components/ProductList/CardItems'
import ProductList from '../components/ProductList/ProductList'

const HomeScreen = () => {

    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {/* Search */}
                <SearchBar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ marginTop: '8%' }}
                />

                {/* Banner */}
                <Banner />

                {/* Content */}
                <View style={style.container} >
                    <View style={style.titleProduct} >
                        <Text style={style.heading} >Mới nhất</Text>
                        <TouchableOpacity>
                            <Text style={style.seeAll} >Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <CardItems  /> */}
                    {/* <ProductList/> */}
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        // marginLeft: 23.5,
        // marginRight: 23.5
    },

    titleProduct: {
        marginTop: 30,
        // marginLeft: 24.71,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24.71,
    },

    heading: {
        fontWeight: '600',
        fontSize: 24,
        color: '#181725',
    },

    seeAll: {
        color: '#53B175',
        fontWeight: '900',
        fontSize: 16,
    },

})

export default HomeScreen