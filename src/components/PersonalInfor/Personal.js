import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';
import SelectDateTimePicker from './SelectDateTimePicker';


const Personal = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [birthDay, setBirthDay] = useState(null);

  return (
    <View>
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

        {/* Select Date */}
        <SelectDateTimePicker />

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textLogin}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },

  btnLogin: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '95%',
    paddingVertical: '4%',
    marginTop: 35,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default Personal;
