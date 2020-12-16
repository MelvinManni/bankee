import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonLarge from '../../Components/Button/Button';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomView from '../../Components/View/CustomView';
import InputField from '../../Components/Input/Input';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [isPassword, setIsPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-off');
  const [password, setPassword] = useState('');

  const changePasswordViewIcon = () => {
    setEyeIcon((prevItems) => {
      return prevItems === 'eye' ? 'eye-off' : 'eye';
    });
    setIsPassword(!isPassword);
  };

  return (
    <CustomView style={styles.container}>
      <View>
        <Text style={styles.welcomeHeading}>Welcome Back!</Text>
        <Text style={styles.welcomeText}>Sign in to continue</Text>
      </View>

      <InputField
        focus={emailFocus}
        onChange={setEmail}
        setFocus={setEmailFocus}
        placeholder="Email"
        value={email}
      />

      <InputField
        password
        focus={passwordFocus}
        secureTextEntry={eyeIcon === 'eye-off' ? true : false}
        onChange={setPassword}
        setFocus={setPasswordFocus}
        placeholder="Password"
        value={password}
        icon={eyeIcon}
        swapIcon={changePasswordViewIcon}
      />

      <View style={styles.forgot}>
        <TouchableOpacity activeOpacity={0.5}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <ButtonLarge
        onPress={() => {
          navigation.navigate('TouchId');
        }}
        btnColor="#7165E3"
      >
        Sign in My Account
      </ButtonLarge>

      <View style={styles.bottom}>
        <Text>Don't have an account? -</Text>
        <TouchableOpacity 
          activeOpacity={0.5}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <FooterBottomLine />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
  },
  welcomeHeading: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 71,
    marginBottom: 21,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 60,
    fontSize: 15,
    fontWeight: '400',
  },
  forgot: {
    marginLeft: 'auto',
    paddingBottom: 51,
    fontSize: 12,
    marginTop: 16,
    color: 'rgba(28, 25, 57, 0.8)',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    marginTop: 19,
  },
  signUp: {
    fontWeight: 'bold',
    paddingStart: 5,
  },
});

export default SignIn;
