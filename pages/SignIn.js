import React, { useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
// import Icon  from 'react-native-vector-icons/dist/Feather';
// import Icon from 'react-native-vector-icons/Ionicons';

import ButtonLarge from '../components/ButtonLarge';
import EmailInputField from '../components/EmailInputField';
import FooterBottomLine from '../components/FooterBottomLine';
import PasswordInputField from '../components/PasswordInputField';

const SignIn = () => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [isPassword, setIsPassword] = useState(true);
    const [eyeIcon, setEyeIcon] = useState('eye-off');

    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const changePasswordViewIcon = () => {
        setEyeIcon((prevItems) => {
            return prevItems === 'eye' ? 'eye-off' : 'eye';
        });
        setIsPassword(!isPassword);
    };

    return (
        <View style={styles.container}>
            <View>
                <StatusBar backgroundColor="white" />
                <View>
                    <Text style={styles.welcomeHeading}>Welcome Back!</Text>
                    <Text style={styles.welcomeText}>Sign in to continue</Text>
                </View>

                <EmailInputField 
                    emailFocus={emailFocus} 
                    emailText={emailText} 
                    setEmailText={setEmailText} 
                    setEmailFocus={setEmailFocus} 
                />

                <PasswordInputField 
                    isPassword={isPassword}
                    passwordFocus={passwordFocus}
                    setPasswordText={setPasswordText}
                    passwordText={passwordText}
                    eyeIcon={eyeIcon}
                    setPasswordFocus={setPasswordFocus}
                    changePasswordViewIcon={changePasswordViewIcon}
                />

                <View style={styles.forgot}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <ButtonLarge title="Sign in My Account " btnColor="#7165E3" />

                <View style={styles.buttom}>
                    <Text>Don't have an account? -</Text>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <FooterBottomLine/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 37,
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
    buttom: {
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
