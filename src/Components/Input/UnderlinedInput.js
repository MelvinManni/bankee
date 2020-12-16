import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const InputField = ({
  focus,
  setFocus,
  onChange,
  value,
  icon,
  swapIcon,
  placeholder,
  autoCapitalize,
  ...rest
}) => {
  return (
    <View>
      <TextInput
        {...rest}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize !== undefined ? autoCapitalize : 'none'}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        style={focus ? styles.focus : styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 2,
    borderBottomColor: '#1C1939',
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 46,
    letterSpacing: -0.5,
    color: '#1C1939',
    padding: 15,
    margin: 5,
  },
  focus: {
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 2,
    borderBottomColor: '#7165E3',
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 46,
    letterSpacing: -0.5,
    color: '#7165E3',
    padding: 15,
    margin: 5,
  },
  eye: {
    position: 'absolute',
    right: 15,
    top: 14,
  },
});

export default InputField;
