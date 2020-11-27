import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet 
} from 'react-native';
import InputField from '../../Components/Input/Input';
import ButtonLarge from '../../Components/Button/Button';
import CustomView from '../../Components/View/CustomView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';

const SignUp = ({navigation}) => {

    const [fullName, setFullName] = useState('');
    const [fullNameFocus, setFullNameFocus] = useState(false);
    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordOneFocus, setPasswordOneFocus] = useState(false);
    const [passwordTwoFocus, setPasswordTwoFocus] = useState(false);

    const [isPasswordOne, setIsPasswordOne] = useState(true);
    const [isPasswordTwo, setIsPasswordTwo] = useState(true);
    const [eyeIcon, setEyeIcon] = useState('eye-off');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const changePasswordViewIconOne = () => {
        setEyeIcon((prevItems) => {
            return prevItems === 'eye' ? 'eye-off' : 'eye';
        });
        setIsPasswordOne(!isPasswordOne);
    };
    const changePasswordViewIconTwo = () => {
        setEyeIcon((prevItems) => {
            return prevItems === 'eye' ? 'eye-off' : 'eye';
        });
        setIsPasswordTwo(!isPasswordTwo);
    };

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
                focus={passwordOneFocus}
                // secureTextEntry={eyeIcon === 'eye-off' ? true : false}
                onChange={setPasswordOne}
                setFocus={setPasswordOneFocus}
                placeholder="Password"
                value={passwordOne}
                icon={eyeIcon}
                swapIcon={changePasswordViewIconOne}
            />

            <InputField
                password
                focus={passwordTwoFocus}
                // secureTextEntry={eyeIcon === 'eye-off' ? true : false}
                onChange={setPasswordTwo}
                setFocus={setPasswordTwoFocus}
                placeholder="Password"
                value={passwordTwo}
                icon={eyeIcon}
                swapIcon={changePasswordViewIconTwo}
            />

            <ButtonLarge
                onPress={() => {
                    navigation.navigate('Signin')
                }}
                
            >
                Sign up my Account
            </ButtonLarge>

            <ButtonLarge
                secondary
            >
                Sign up with Phone Number
            </ButtonLarge>
            <View style={styles.bottom}>
                <Text>Already have an account? -</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.signIn}>Sign In</Text>
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
        // justifyContent: 'space-between',
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
        marginBottom:50,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'DM Sans',
        fontSize: 15,
        marginTop: 19,
    },
    signIn:{
        fontFamily: 'DM Sans',
        fontSize:15,
        fontWeight:'700',
        paddingStart: 5,
    }

})

export default SignUp;
