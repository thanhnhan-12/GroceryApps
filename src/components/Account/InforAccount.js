import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {dataInforAccount} from './DataInforAccount';
import IconAccount from '../../assets/SVG/IconAccountCircle.svg';
import IconLogout from '../../assets/SVG/IconLogout.svg';
import {useNavigation} from '@react-navigation/native';
import AuthProvider, {AuthContext} from '../../context/AuthContext';
import authApi from '../../api/authApi';

const InforAccount = () => {
  const [inforAccount, setInforAccount] = useState(dataInforAccount);

  const {userInfo, logout} = useContext(AuthContext);

  const {token, users} = userInfo;
  const {fullName, email} = users;

  console.log('Users: ', users);

  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#fff'}}>
      <AuthProvider>
        <View style={[styles.account]}>
          <TouchableOpacity style={[styles.iconAccount]}>
            <IconAccount width={80} />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <Text style={[styles.nameAccount, styles.colors]}>
              {fullName || 'Họ và tên'}
            </Text>
            <Text style={[styles.emailAccount]}>{email || 'Email'}</Text>
          </View>
        </View>
      </AuthProvider>

      {inforAccount.map((items, index) => (
        <>
          <TouchableOpacity
            style={[styles.inline1]}
            key={index}
            onPress={id => {
              if (items.id === 1) {
                navigation.navigate('OrderScreen');
              }

              if (items.id === 2) {
                navigation.navigate('PersonalInformation');
              }

              if (items.id === 3) {
                navigation.navigate('DeliveryScreen');
              }

              if (items.id === 4) {
                navigation.navigate('AdminScreen');
              }
            }}>
            <View>{items.iconRepresent}</View>

            <View style={[styles.inline2]}>
              <Text style={[styles.textTitle, styles.colors]}>
                {items.title}
              </Text>
              {items.iconArrow}
            </View>
          </TouchableOpacity>
        </>
      ))}

      <TouchableOpacity style={[styles.btnLogout]} onPress={logout}>
        <View style={[{marginRight: '4%'}]}>
          <IconLogout />
        </View>
        <Text style={[styles.textLogout]}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginLeft: 23,
  },

  colors: {
    color: '#181725',
  },

  iconAccount: {},

  nameAccount: {
    fontSize: 20,
    marginBottom: 5,
  },

  emailAccount: {
    color: '#7C7C7C',
    fontSize: 16,
  },

  inline1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  inline2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 18,
    marginLeft: 20.49,
  },

  btnLogout: {
    backgroundColor: '#DCF5DC',
    borderRadius: 19,
    paddingVertical: '4%',
    marginHorizontal: 18,
    marginVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLogout: {
    color: '#53B175',
    fontSize: 18,
  },
});

export default InforAccount;
