import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../UI/screens/Onboarding';
import Landing from '../UI/screens/Auth/Landing';
import SignUp from '../UI/screens/Auth/SignUp';
import Login from '../UI/screens/Auth/Login';
import ForgotPassword from '../UI/screens/Auth/ForgotPassword';
import PasswordOtp from '../UI/screens/Auth/PasswordOtp';
import Home from '../UI/screens/Home/Home';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordOtp"
        component={PasswordOtp}
        options={{headerShown: false}}
      />
        <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};
