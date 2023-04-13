import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          userInfo && userInfo.toString().length > 0
            ?
            (
              <>

              </>
            )
            :
            (
              <>
                <Stack.Screen
                  name='Login'
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />

              </>
            )

        }


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation