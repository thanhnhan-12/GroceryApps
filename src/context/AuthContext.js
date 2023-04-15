import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        setUserInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
