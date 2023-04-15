import React from 'react';
import AuthNavigation from './src/navigation/AuthNavigation';
import AuthProvider from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <AuthProvider>
      <AuthNavigation />
    </AuthProvider>
  );
};

export default App;
