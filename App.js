import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './src/Pages/Splash/SplashScreen';
import SignIn from './src/Pages/SignIn/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountCreated from './src/Pages/AccountCreated/Index';
import TouchId from './src/Pages/TouchId/TouchId';
import AddMobileNumber from './src/Pages/MobileNumber/AddMobileNumber';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signin"
          component={SignIn}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AddNumber"
          component={AddMobileNumber}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AccountCreated"
          component={AccountCreated}
        />

        <Stack.Screen name="TouchId" component={TouchId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
