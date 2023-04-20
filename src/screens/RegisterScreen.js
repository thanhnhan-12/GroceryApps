import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  View,
} from 'react-native';
import BgEclipse from '../assets/images/BackgroundEllipse.png';
import RegisterShopper from '../assets/SVG/RegisterShopper.svg';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  // const navigation = useNavigation();

  const handlePressLoginScreen = (id) => {
    console.log(id);
    navigation.navigate('LoginScreen')
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Background */}
        <ImageBackground
          source={BgEclipse}
          resizeMode="cover"
          style={{height: 400}}>
          <View style={styles.backgroundCurved}>
            <Text style={styles.titleLogin}>Register</Text>
            {/* <Register/> */}
          </View>
          <View style={[styles.vectorRegister, {marginTop: 16}]}>
            <RegisterShopper />
          </View>
        </ImageBackground>

        {/* Input */}
        <View style={[styles.commonInputs]}>
          {/* Input User */}
          <View style={[styles.inputEmail, styles.commonInput]}>
            <Text style={styles.label}>Họ và tên</Text>
            <TextInput
              placeholder={'Nhập Họ và tên'}
              keyboardType={'default'}
              value={name}
              onChangeText={text => setName(text)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          {/* Input Email */}
          <View style={[styles.inputEmail, styles.commonInput]}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder={'Nhập Email'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={text => setEmail(text)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          {/* Input Password */}
          <View style={[styles.commonInput]}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              placeholder={'Nhập Mật khẩu'}
              keyboardType={'default'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          {/* Input Confirm Password */}
          <View style={[styles.commonInput]}>
            <Text style={styles.label}>Nhập lại mật khẩu</Text>
            <TextInput
              placeholder={'Nhập lại Mật khẩu'}
              keyboardType={'default'}
              value={confirmPass}
              onChangeText={text => setConfirmPass(text)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textLogin}>Đăng ký</Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}>
            <Text style={{color: '#0EB177'}}>Đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
              <Text
                style={{
                  color: '#0EB177',
                  fontWeight: '700',
                  marginLeft: 4,
                  marginTop: 15,
                }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleLogin: {
    fontSize: 34,
    fontWeight: 700,
    color: '#fff',
    marginTop: 30,
    marginLeft: 20,
  },

  backgroundCurved: {},

  vectorRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  commonInputs: {
    marginLeft: 20,
    marginBottom: 30,
  },

  commonInput: {
    marginTop: 20,
  },

  label: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
  },

  input: {
    height: 45,
    marginTop: 6,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    backgroundColor: '#F2F2F2',
  },

  btnLogin: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '95%',
    paddingVertical: "4%",
    marginTop: 35,

  },

  textLogin: {
      color: 'white',
      fontWeight: 700,
      width: '100%',
      textAlign: 'center',
  }

});

export default RegisterScreen;
