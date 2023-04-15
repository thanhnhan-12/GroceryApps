import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {AuthContext} from '../context/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import MenuNavigation from './MenuNavigation';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo && userInfo.toString().length > 0 ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeNavigation}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={MenuNavigation}
              options={{headerShown: false}}
            />
           
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
