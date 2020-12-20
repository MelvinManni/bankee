import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './src/Pages/Splash/SplashScreen';
import SignUp from './src/Pages/SignUp/SignUp';
import SignIn from './src/Pages/SignIn/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountCreated from './src/Pages/AccountCreated/Index';
import TouchId from './src/Pages/TouchId/TouchId';
import AddMobileNumber from './src/Pages/MobileNumber/AddMobileNumber';
import VerifyNumber from './src/Pages/VerifyingNumber/VerifyNumber';
import SetPin from './src/Pages/SetPin/SetPin';
import BudgetScreen from './src/Pages/Budget/Budget';
import MainScreen from './src/Pages/Main/Main';
import DetailsScreen from './src/Pages/Details/Details';
import TextButton from './src/Components/Button/TextButton';
import Icon from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerTitle: false,
          headerLeft: () => (
            <Icon
              onPress={() => {
                navigation.goBack();
              }}
              name="chevron-left"
              style={{marginLeft: 25, fontSize: 28}}
            />
            // <TextButton style={{marginLeft: 35}}> Hello </TextButton>
          ),
        })}
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
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AccountCreated"
          component={AccountCreated}
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
          name="VerifyNumber"
          component={VerifyNumber}
        />

        <Stack.Screen name="SetPin" component={SetPin} />

        <Stack.Screen name="TouchId" component={TouchId} />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BudgetScreen"
          component={BudgetScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainScreen"
          component={MainScreen}
        />

        <Stack.Screen
          options={{
            headerRight: () => (
              <TextButton style={{marginRight: 35}}>Set Budget</TextButton>
            ),
          }}
          name="DetailsScreen"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
