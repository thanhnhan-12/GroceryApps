import React from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import ExploreList from '../components/ExploreProduct/ExploreList'

const ExploreScreen = () => {
  return (
    <SafeAreaView style={[styles.container]} >
      <ScrollView>
        {/* Search Bar */}
        <SearchBar  style={{ marginTop: '8%', marginBottom: '0%'  }} />

        {/* Explore List */}
        <ExploreList />

       
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },  

})

export default ExploreScreen