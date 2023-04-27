import React from 'react';
import AuthProvider from './src/context/AuthContext';
import AuthNavigation from './src/navigation/AuthNavigation';

const App = () => {
  return (
    <AuthProvider>
      <AuthNavigation />
    </AuthProvider>
  );
};

export default App;
