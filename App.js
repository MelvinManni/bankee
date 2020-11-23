import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './src/Pages/SIgnIn/SignIn';
import SplashScreen from './src/Pages/Splash/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
