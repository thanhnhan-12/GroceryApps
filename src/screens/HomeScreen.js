import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Banner from '../components/Banner'
import GroceriesList from '../components/Groceries/GroceriesList'
import ProductList from '../components/ProductList/ProductList'
import SearchBar from '../components/SearchBar'
import { useNavigation } from '@react-navigation/native'
import Distributor from '../components/Distributor/Distributor'

const HomeScreen = () => {


    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}} >
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
                    {/* Newest */}
                    <View style={style.titleProduct} >
                        <Text style={style.heading} >Mới nhất</Text>
                        <TouchableOpacity>
                            <Text style={style.seeAll} >Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Card Items - Newest */}
                    <ProductList/>

                    {/* Best selling */}
                    <View style={style.titleProduct} >
                        <Text style={style.heading} >Bán chạy</Text>
                        <TouchableOpacity>
                            <Text style={style.seeAll} >Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Card Items - Best Selling */}
                    <ProductList/>

                    {/* Groceries */}
                    <View style={style.titleProduct} >
                        <Text style={style.heading} >Các mặt hàng</Text>
                        <TouchableOpacity>
                            <Text style={style.seeAll} >Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Card Items - Grocerieslist */}
                    <GroceriesList/>

                    {/* Popular */}
                    <View style={style.titleProduct} >
                        <Text style={style.heading} >Phổ biến</Text>
                        <TouchableOpacity>
                            <Text style={style.seeAll} >Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Card Items - Popular */}
                    <ProductList/>

                    {/* Distributor */}
                    <View style={style.titleProduct}>
                        <Text style={style.heading} >Nhà phân phối</Text>
                    </View>

                    {/* Card Items - Distributor */}
                    <Distributor />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        paddingBottom: 40
    },

    titleProduct: {
        marginTop: 30,
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