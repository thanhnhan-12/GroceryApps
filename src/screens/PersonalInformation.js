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

const PersonalInformation = () => {
  const navigation = useNavigation();

  const handleBackAccountScreen = () => {
    navigation.navigate('AccountScreen');
  };

  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaView style={[{backgroundColor: "#fff"}]} >
      <ScrollView>
        <TouchableOpacity
          style={[styles.flex]}
          onPress={handleBackAccountScreen}>
          <IconBackArrow />
          <Text style={[styles.textInfor]} >Thông tin cá nhân</Text>
          <Text>{hidden }</Text>
        </TouchableOpacity>

        <Personal />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  textInfor: {
    fontSize: 20,
    fontWeight: "900",
    color: '#181725',

  },

});

export default PersonalInformation;
