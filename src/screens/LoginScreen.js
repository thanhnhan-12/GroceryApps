import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);

    return (
        <SafeAreaView>
            <ScrollView>
                {/* Background */}
                <View style={styles.backgroundCurved} >
                    <Text style={styles.textLogin} >Login</Text>
                </View>

                {/* Input */}
                <View style={styles.doubleInput} >
                    <View style={styles.inputEmail} >
                        {/* Input Email */}
                        <Text style={styles.label} >Email</Text>
                        <TextInput
                            placeholder={'yourmail@mail.com'}
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
                            placeholder={'your password'}
                            keyboardType={"email-address"}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            secureTextEntry={true}
                            style={styles.input}

                        />
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    textLogin: {
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
        borderBottomEndRadius: wp('40%'),
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
        marginTop: 10,
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

})

export default LoginScreen