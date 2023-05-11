import React, {createContext, useState, useEffect } from 'react';
import authApi from '../api/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from 'react-native-toast-message';
import {Alert} from 'react-native';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const register = async (fullName, email, password) => {
    setIsLoading(true);
    await authApi
      .register({fullName, email, password})
      .then(res => {
        setIsLoading(false);
        Alert('Đăng ký thành công');
      })
      .catch(e => {
        console.error(e.response.data.message);
        setIsLoading(false);
      });
  };

  const login = async (email, password) => {
    setIsLoading(true);

    const data = await authApi
      .login({email, password})
      .then(res => {
        setUserInfo(res);
        AsyncStorage.setItem('userInfo', JSON.stringify(res));
        setIsLoading(false);
        Alert('Đăng ký thành công');
      })
      .catch(e => {
        console.error(e.response.data.message);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const logout = () => {
    setIsLoading(true);

    if (userInfo !== null) {
      setUserInfo([]);
      setIsLoading(false);
    } else {
      setUserInfo([]);
      setIsLoading(false);
    }
  };

  const checkLoginStatus = async () => {
    try {
      const savedUserInfo = await AsyncStorage.getItem('userInfo');
      if (savedUserInfo !== null) {
        setUserInfo(JSON.parse(savedUserInfo));
      }
    } catch (error) {
      console.error(error);
    }
    console.log({saveLoginInfo});
    console.log({userInfo});
  };

  const saveLoginInfo = async (username, password) => {
    try {
      await AsyncStorage.setItem('userInfo', username);
      await AsyncStorage.setItem('passWord', password);
    } catch (error) {
      console.error(error);
    }
    console.log({userInfo});
    console.log({username, password});
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        // transmissionPropsPost,
        setUserInfo,
        // addToCart,
        // countLengthCart,
        isLoading,
        userInfo,
        isError,
        checkLoginStatus,
        saveLoginInfo,
        // dataPost,
        // lengthCart,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
