import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../utils/Constants';
import MainScreen from '../screens/mainScreen';

const AuthStack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={SCREENS.MainScreen} component={MainScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedStack;
