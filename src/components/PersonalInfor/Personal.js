import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import SelectDateTimePicker from './SelectDateTimePicker';
import SelectDateTime from '../Admin/ProductList/SelectDateTime';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import userApi from '../../api/userApi';
import {useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';

const Personal = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);

  const [infor, setInfor] = useState([]);

  const {userInfo} = useContext(AuthContext);

  const {users} = userInfo;

  const [usersName, setUsersName] = useState(null);
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [email, setEmail] = useState(null);
  const [phones, setPhones] = useState(null);
  const [birthDay, setBirthDay] = useState(new Date());

  const fetchUserInforApi = async userID => {
    const [{userName, passWord, fullName, email, phone, address, birthday}] =
      await userApi.getUserInfor(userID);

    setUsersName(userName);
    setName(fullName);
    setEmail(email);
    setPhones(phone);
    // setBirthDay(birthday);

    console.log('Log', [
      {
        userName,
        passWord,
        fullName,
        email,
        phone,
        address,
        birthday,
      },
    ]);
    setLoading(false);
  };

  const updateUserInfor = async () => {
    const body = {
      userName: usersName,
      passWord: pass,
      fullName: name,
      email: email,
      phone: phones,
      birthday: moment(birthDay).format('YYYY-MM-DD'),
    };

    const userInforById = await userApi.updateUserInforById(users.userID, body);

    if (pass !== confirmPass) {
      console.error('Mật khẩu không trùng khớp');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchUserInforApi(users.userID);
    }, [users.userID]),
  );

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <ScrollView>
      <View>
        <View style={[styles.commonInputs]}>
          <View style={[styles.inputEmail, styles.commonInput]}>
            <Text style={styles.label}>Tên người dùng</Text>
            <TextInput
              placeholder={'Nhập Tên người dùng'}
              keyboardType={'default'}
              value={usersName}
              onChangeText={text => setUsersName(text)}
              secureTextEntry={false}
              style={styles.input}
            />
          </View>

          <View style={[styles.commonInput]}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              placeholder={'Nhập Mật khẩu'}
              keyboardType={'default'}
              value={pass}
              onChangeText={pass => setPass(pass)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <View style={[styles.commonInput]}>
            <Text style={styles.label}>Nhập lại mật khẩu</Text>
            <TextInput
              placeholder={'Nhập lại Mật khẩu'}
              keyboardType={'default'}
              value={confirmPass}
              onChangeText={pass => setConfirmPass(pass)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <View style={[styles.inputEmail, styles.commonInput]}>
            <Text style={styles.label}>Họ và tên</Text>
            <TextInput
              placeholder={'Nhập Họ và tên'}
              keyboardType={'default'}
              value={name}
              onChangeText={text => setName(text)}
              secureTextEntry={false}
              style={styles.input}
            />
          </View>

          <View style={[styles.inputEmail, styles.commonInput]}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder={'Nhập Email'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={text => setEmail(text)}
              secureTextEntry={false}
              style={styles.input}
            />
          </View>

          <View style={[styles.inputEmail, styles.commonInput]}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              placeholder={'Nhập Số điện thoại'}
              keyboardType={'default'}
              value={phones}
              onChangeText={number => setPhones(number)}
              secureTextEntry={false}
              style={styles.input}
            />
          </View>

          <View>
            <SelectDateTime
              label="Chọn ngày sinh"
              dateSelected={birthDay}
              onChangeDate={date => {
                setBirthDay(date);
              }}
            />
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={updateUserInfor}>
            <Text style={styles.textLogin}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
