import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Login from '../assets/SVG/login.svg'
import Eye from '../assets/SVG/eyepass.svg'

const LoginScreen = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);

    return (
        <SafeAreaView>
            <ScrollView>
                {/* Background */}
                <View style={styles.backgroundCurved} >
                    <Text style={styles.titleLogin} >Login</Text>
                    {/* <Login/> */}
                </View>

                {/* Input */}
                <View style={styles.doubleInput} >
                    <View style={styles.inputEmail} >
                        {/* Input Email */}
                        <Text style={styles.label} >Email</Text>
                        <TextInput
                            placeholder={'Nhập Email'}
                            keyboardType={"email-address"}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            secureTextEntry={true}
                            style={styles.input}

                        />
                    </View>

                    <View style={styles.inputPass} >
                        {/* Input Email */}
                        <Text style={styles.label} >Password</Text>
                        <TextInput
                            placeholder={'Nhập Mật khẩu'}
                            keyboardType={"email-address"}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            style={styles.input}

                        />

                    </View>

                    <TouchableOpacity style={styles.btnLogin} >
                        <Text style={styles.textLogin} >Đăng nhập</Text>
                    </TouchableOpacity>
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
        marginTop: 234,
        marginLeft: 20,
    },

    backgroundCurved: {
        backgroundColor: "#53B97C",
        height: 370,
        marginBottom: 80,
        borderBottomEndRadius: wp('30%'),
        borderBottomStartRadius: hp('8%'),
    },

    doubleInput: {
        marginLeft: 20,
        marginTop: -30
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
        marginTop: 42,

    },

    textLogin: {
        color: 'white',
        fontWeight: 700,
        width: '100%',
        textAlign: 'center',
    }

})

export default LoginScreen