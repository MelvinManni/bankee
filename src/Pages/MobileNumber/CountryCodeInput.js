import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import nodeEmoji from 'node-emoji';
import InputField from '../../Components/Input/Input';
const screenWIdth = Math.round(Dimensions.get('window').width);

const CountryCodeInput = ({
  onChange,
  value,
  setCode,
  autoCapitalize,
  style,
  ...rest
}) => {
  const [showCountry, setShowCountry] = useState(false);
  const [countryState, setCountryState] = useState({
    view: false,
    flag: 'flag-ng',
    code: '234',
  });
  const handleCountry = (val) => {
    setCountryState({
      view: true,
      flag: val[['flag']],
      code: val['callingCode'][0],
    });
  };

  useEffect(() => {
    setCode(countryState.code);
  }, [countryState.code]);
  return (
    <>
      <CountryPicker
        {...{
          withFilter: true,
          withCallingCode: true,
          onSelect: handleCountry,
          onClose: () => {
            setShowCountry(false);
          },
        }}
        containerButtonStyle={styles.off}
        visible={showCountry}
      />
      <View style={styles.row}>
        <View style={styles.flagContainer}>
          <TouchableOpacity
            style={styles.country}
            onPress={() => {
              setShowCountry(true);
            }}
            activeOpacity={0.8}>
            <View style={styles.flagHolder}>
              <Text style={styles.flag}>
                {nodeEmoji.get(countryState.flag)}
              </Text>
              <Text style={styles.countryCode}>+{countryState.code}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputHolder}>
          <TextInput
            {...rest}
            keyboardType="number-pad"
            autoCapitalize={
              autoCapitalize !== undefined ? autoCapitalize : 'none'
            }
            onChangeText={(text) => onChange(text)}
            value={value}
            style={[styles.input, style]}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  country: {
    color: '#2C2948',
    width: '100%',
  },
  flagContainer: {
    display: 'flex',
    paddingLeft: 8,
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '25%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flagHolder: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 20,
  },
  countryCode: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#2C2948',
    marginLeft: 2,
    borderRightWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#eee',
    paddingRight: 5,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#F7F7F7',
    borderWidth: 1,
    paddingLeft: 6,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    height: '100%',
    fontSize: 15,
    lineHeight: 25,
    color: '#2C2948',
  },
  inputHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '75%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    height: 55,
    width: '100%',
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 10,
  },
  off: {
    display: 'none',
  },
});
export default CountryCodeInput;
