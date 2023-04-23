import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LoginShopper from '../assets/SVG/LoginShopper.svg'
import Eye from '../assets/SVG/eyepass.svg'
import BgEclipse from '../assets/images/BackgroundEllipse.png'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null)

    const [password, setPassword] = useState(null);

    const [isInputValid, setIsInputValid] = useState(false);

    const handleCheckInputField = () => {
        if (!email || !password) {
            // Kiểm tra nếu email hoặc mật khẩu không hợp lệ
            setIsInputValid(false);
            // Hiển thị thông báo lỗi
            alert('Email và mật khẩu không được để trống');
          } else {
            // Xử lý đăng nhập
            // ...
          }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {/* Background */}
                <ImageBackground source={BgEclipse} resizeMode='cover' style={{height: 360}} >
                    <View style={styles.backgroundCurved} >
                        <Text style={styles.titleLogin} >Login</Text>
                        {/* <Login/> */}
                    </View>
                    <View style={{marginLeft: 200}} >
                         <LoginShopper  />
                    </View>
                </ImageBackground>

                {/* Input */}
                <View style={styles.doubleInput} >
                        {/* Input Email */}
                    <View style={styles.inputEmail} >
                        <Text style={styles.label} >Email</Text>
                        <TextInput
                            placeholder={'Nhập Email'}
                            keyboardType={"email-address"}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            secureTextEntry={true}
                            style={[styles.input, isInputValid && (!email || !password) ? { borderColor: 'red' } : null, ]}
                        />
                    </View>

                        {/* Input Password */}
                    <View style={styles.inputPass} >
                        <Text style={styles.label} >Password</Text>
                        <TextInput
                            placeholder={'Nhập Mật khẩu'}
                            keyboardType={"visible-password"}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            style={[styles.input, ]}
                        />
                    </View>

                    <TouchableOpacity style={styles.btnLogin} onPress={handleCheckInputField} >
                        <Text style={styles.textLogin} >Đăng nhập</Text>
                    </TouchableOpacity>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' }} >
                        <Text style={{color: "#0EB177"}} >
                            Chưa có tài khoản?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} ><Text style={{color: "#0EB177", fontWeight: '700', marginLeft: 4, marginTop: 15 }} >Đăng ký</Text></TouchableOpacity>
                    </View>
                   
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    titleLogin: {
        fontSize: 34,
        fontWeight: 700,
        color: "#fff",
        marginTop: 30,
        marginLeft: 20,
    },

    backgroundCurved: {
        
    },

    doubleInput: {
        marginLeft: 20,
        marginTop: 20,
    },

    inputEmail: {
        // marginLeft: 20
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

    inputPass: {
        marginTop: 18,
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

})

export default LoginScreen