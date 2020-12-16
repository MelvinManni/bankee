import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../Components/Button/Button';
import CustomView from '../../Components/View/CustomView';

const VerifyNumber = ({navigation}) => {
  const [otp, setOtp] = useState('');
  return (
    <CustomView style={styles.container}>
      <View>
        <View style={styles.mt}>
          <Text style={styles.title}>Verify Account!</Text>
          <Text style={{...styles.text, ...styles.mt}}>
            Enter 4-digit Code code we have sent to at
          </Text>
          <Text style={{...styles.text, ...styles.link}}>+0 000 000 0000.</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <OTPInputView
            pinCount={4}
            style={Otpstyles.view}
            code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={(code) => {
              setOtp(code);
            }}
            autoFocusOnLoad
            codeInputFieldStyle={Otpstyles.underlineStyleBase}
            codeInputHighlightStyle={Otpstyles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>

        <View style={styles.resendView}>
          <Text style={styles.text}>Didn’t not received the code?</Text>
          <Text style={styles.linkBold}>Resend Code</Text>
        </View>

      </View>
      <View style={styles.mt}>
        <CustomButton
          onPress={() => {
            navigation.navigate('TouchId');
          }}>
          Proceed
        </CustomButton>
        <Text style={{...styles.text, ...styles.mt}}>
          by clicking start, you agree to our{' '}
          <Text style={styles.link}>Privacy Policy</Text> our{' '}
          <Text style={styles.link}>Teams and Conditions</Text>
        </Text>
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 35,
    paddingVertical: 55,
  },
  mt: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 46,
    textAlign: 'center',
    color: '#1C1939',
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: 'rgba(28, 25, 57, 0.8)',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#7165E3',
  },

  resendView: {
    marginTop: 40,
  },
  linkBold: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23,
    textDecorationLine: 'underline',
    color: '#7165E3',
    textAlign: 'center',
    marginTop: 16,
  },
});

const Otpstyles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 55,
  },

  borderStyleHighLighted: {
    borderColor: '#7165E3',
  },

  underlineStyleBase: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 36,
    letterSpacing: -0.5,
    color: '#1C1939',
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#7165E3',
    color: '#7165E3',
  },
  view: {
    width: '75%',
    height: 30,
    color: '#000',
    marginTop: 50,
  },
});
export default VerifyNumber;
