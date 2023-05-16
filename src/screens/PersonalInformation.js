import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Personal from '../components/PersonalInfor/Personal';
import IconBackArrow from '../assets/SVG/IconBackArrow.svg';
import {useNavigation} from '@react-navigation/native';
import { PersonalInforHeading } from '../components/Heading';

const PersonalInformation = () => {
  const navigation = useNavigation();

  const handleBackAccountScreen = () => {
    navigation.navigate('AccountScreen');
  };

  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaView style={[{backgroundColor: '#fff'}]}>
      <ScrollView>
        <PersonalInforHeading/>

        <Personal />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default PersonalInformation;
