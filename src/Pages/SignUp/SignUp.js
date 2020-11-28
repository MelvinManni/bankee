import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import InputField from '../../Components/Input/Input';
import ButtonLarge from '../../Components/Button/Button';
import CustomView from '../../Components/View/CustomView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';

const screenWidth = Math.round(Dimensions.get('window').width);

const SignUp = ({ navigation }) => {

    const [fullName, setFullName] = useState('');
    const [fullNameFocus, setFullNameFocus] = useState(false);
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

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <CustomView style={styles.container}>

            <View style={styles.welcome}>
                <Text style={styles.welcomeHeading}>Welcome!</Text>
                <Text style={styles.welcomeSubHeadingOne}>Please provide the following</Text>
                <Text style={styles.welcomeSubHeadingTwo}>details for your new account</Text>
            </View>

            <InputField
                focus={fullNameFocus}
                onChange={setFullName}
                setFocus={setFullNameFocus}
                placeholder='Full Name'
                value={fullName}
            />

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

            <View style={styles.termsSection}>
                <CheckBox
                    // tintColor='red'
                    value={toggleCheckBox} 
                    tintColors={
                        {
                            true:'#7165E3', 
                            false:'#7165E3'
                        }
                    }
                    onValueChange={(value) => setToggleCheckBox(!toggleCheckBox)  }
                    // onPress = {()=>setToggleCheckBox(!toggleCheckBox)}
                />
                <Text style={styles.terms}>By creating your account you have to agree with our Terms and Conditions.</Text>
            </View>

            <ButtonLarge
                onPress={() => {
                    navigation.navigate('Signin')
                }}
            >
                Sign up my Account
            </ButtonLarge>

            <ButtonLarge
                secondaryDark
            >
                Sign up with Phone Number
            </ButtonLarge>

            <View style={styles.bottom}>
                <Text>Already have an account? -</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Signin')}
                >
                    <Text style={styles.signIn} >Sign In</Text>
                </TouchableOpacity>
            </View>

            <FooterBottomLine />

        </CustomView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
    },
    welcome: {
        alignItems: 'center',
    },
    welcomeHeading: {
        fontSize: 35,
        fontWeight: '700',
        marginTop: 25,
        marginBottom: 21,
        color: '#1C1939',
    },
    welcomeSubHeadingOne: {
        fontSize: 15,
        marginBottom: 4,
        color: 'rgba(28, 25, 57, 0.8)',
    },
    welcomeSubHeadingTwo: {
        fontSize: 15,
        color: 'rgba(28, 25, 57, 0.8)',
        marginBottom: 40,
    },
    termsSection: {
        flexDirection: 'row',
        paddingVertical:20,
        width: screenWidth * 0.7,
    },
    terms: {
        fontFamily: 'DM Sans',
        fontWeight: '400',
        color: 'rgba(28, 25, 57, 0.8)',
        fontSize: 13,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'DM Sans',
        fontSize: 15,
        marginTop: 19,
    },
    signIn: {
        fontFamily: 'DM Sans',
        fontSize: 15,
        fontWeight: '700',
        paddingStart: 5,
    }

})

export default SignUp;
