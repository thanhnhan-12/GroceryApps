import React from 'react'
import AuthNavigation from './src/navigation/AuthNavigation'
import AuthProvider from './src/context/AuthContext'
import LoginScreen from './src/screens/LoginScreen'


const App = () => {
    return (
        // <AuthProvider>
        //     <AuthNavigation />
        // </AuthProvider>
        <LoginScreen/>
    )
}

export default App