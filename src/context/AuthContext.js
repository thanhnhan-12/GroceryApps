import React, { createContext, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {


    return (
        <AuthContext.Provider
        >

            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider