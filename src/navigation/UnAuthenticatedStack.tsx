import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../utils/Constants';
import LoginScreen from '../screens/login';

const AuthStack = createNativeStackNavigator();

const UnAuthenticatedStack = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={SCREENS.Login} component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default UnAuthenticatedStack;
