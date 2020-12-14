import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../Components/Button/Button';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomView from '../../Components/View/CustomView';
import SetPinKeyBoard from './Components/KeyBoard';

export default function SetPin({navigation}) {
  const [pin, setPin] = useState('');
  return (
    <CustomView style={styles.root}>
      <View
        style={{
          width: '100%',
        }}>
        <View>
          <Text style={styles.title}>Set your PIN</Text>
          <Text style={styles.text}>You will use this to login next time</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <OTPInputView
            pinCount={4}
            style={Otpstyles.view}
            code={pin}
            onCodeChanged={(code) => {
              setPin(code);
            }}
            secureTextEntry={true}
            //   autoFocusOnLoad

            codeInputFieldStyle={Otpstyles.underlineStyleBase}
            codeInputHighlightStyle={Otpstyles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>

        <SetPinKeyBoard state={pin} setState={setPin} />

        <View
          style={{
            width: '100%',
            marginTop: 20,
          }}>
          <CustomButton
            onPress={() => {
              navigation.navigate('TouchId');
            }}>
            Save Pin
          </CustomButton>
        </View>
      </View>

      <FooterBottomLine />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 55,
    paddingBottom: 5,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 28,
    textAlign: 'center',
    color: '#1C1939',
    marginBottom: 15,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: 'rgba(28, 25, 57, 0.8)',
    marginBottom: 40,
  },
});

const Otpstyles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 55,
  },

  underlineStyleBase: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 36,
    letterSpacing: -0.5,
    color: '#1C1939',
    width: 45,
    height: 45,
    borderRadius: 16,
  },

  underlineStyleHighLighted: {
    // backgroundColor: '#7165E3',
    color: '#1C1939',
  },
  view: {
    width: '75%',
    height: 30,
    color: '#000',
    marginBottom: 20,
  },
});
