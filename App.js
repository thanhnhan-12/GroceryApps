import React, {Fragment} from 'react';
import AuthProvider from './src/context/AuthContext';
import AuthNavigation from './src/navigation/AuthNavigation';
import {toastConfig} from './src/constant/toastConfig';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <AuthNavigation />
      </AuthProvider>
      <Toast config={toastConfig} />
    </Fragment>
  );
};

export default App;
