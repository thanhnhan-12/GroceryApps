import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import InforAccount from '../components/Account/InforAccount'

const AccountScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}} >
      <ScrollView>
        <InforAccount />

      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountScreen