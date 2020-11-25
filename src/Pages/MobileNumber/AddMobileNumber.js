import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import CustomButton from '../../Components/Button/Button';
import CustomView from '../../Components/View/CustomView';
import CountryPicker from 'react-native-country-picker-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import nodeEmoji from 'node-emoji';
import InputField from '../../Components/Input/Input';
import CountryCodeInput from './CountryCodeInput';
const screenWIdth = Math.round(Dimensions.get('window').width);

const AddMobileNumber = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  return (
    <CustomView style={styles.container}>
      <View>
        <View style={styles.mt}>
          <Text style={styles.title}>Mobile Number</Text>
          <Text style={{...styles.text, ...styles.mt}}>
            Please enter your valid phone number. We will send you 4-digit code
            to verify account.
          </Text>
        </View>
        <View>
          <CountryCodeInput
            value={phoneNumber}
            onChange={setPhoneNumber}
            setCode={setCountryCode}
          />
        </View>
      </View>
      <View style={styles.mt}>
        <CustomButton
          onPress={() => {
            navigation.navigate('TouchId');
          }}>
          Send Code
        </CustomButton>
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
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
});
export default AddMobileNumber;
