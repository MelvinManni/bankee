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
import SavingScoreScreen from './src/Pages/SavingScore/SavingScore';
import TransferScreen from './src/Pages/Transfer/Transfer';
import RecieptScreen from './src/Pages/Reciept/Reciept';
import ExpenseScreen from './src/Pages/Expense/Expense';
import {StyleSheet, Text} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            <Icon
              onPress={() => {
                navigation.goBack();
              }}
              name="chevron-left"
              style={{marginLeft: 25, fontSize: 28}}
            />
          ),
        })}
        initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerTitle: false,
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

        <Stack.Screen
          options={{headerTitle: false}}
          name="SetPin"
          component={SetPin}
        />

        <Stack.Screen
          options={{headerTitle: false}}
          name="TouchId"
          component={TouchId}
        />

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
            headerTitle: false,
            headerRight: () => (
              <TextButton style={{marginRight: 35}}>Set Budget</TextButton>
            ),
          }}
          name="DetailsScreen"
          component={DetailsScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SavingScoreScreen"
          component={SavingScoreScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="TransferScreen"
          component={TransferScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="RecieptScreen"
          component={RecieptScreen}
        />

        <Stack.Screen
          name="ExpenseScreen"
          component={ExpenseScreen}
          options={{
            headerTitleStyle: styles.title,
            title: 'Expenses',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#1C1939',
    fontSize: 20,
    lineHeight: 26,
  },
});

export default App;
