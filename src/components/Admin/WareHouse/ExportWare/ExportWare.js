import React, {useState} from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import IconBackArrow from '../../../../assets/SVG/IconBackArrow.svg'
import {useNavigation} from '@react-navigation/native';
import FormExport from './FormExport';


const ExportWare = () => {
  return (
    <SafeAreaView>
      <FormExport/>
    </SafeAreaView>
  )
}

export default ExportWare