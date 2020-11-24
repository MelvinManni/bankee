import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './src/Pages/Splash/SplashScreen';
import SignIn from './src/Pages/SignIn/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountCreated from './src/Pages/AccountCreated/Index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="AccountCreated" component={AccountCreated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
