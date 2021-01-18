import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const InputField = ({
  focus,
  setFocus,
  password,
  onChange,
  value,
  icon,
  swapIcon,
  placeholder,
  autoCapitalize,
  style,
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
        onFocus={setFocus !== undefined ? () => setFocus(true) : null}
        style={[focus ? styles.focus : styles.input, style]}
      />
      {password && (
        <TouchableOpacity style={styles.eye}>
          <Icon
            name={icon}
            size={20}
            color="rgba(0,0,0,0.3)"
            onPress={() => swapIcon()}
          />
        </TouchableOpacity>
      )}
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
    borderColor: '#F7F7F7',
    borderWidth: 1,
    paddingLeft: 29,
    borderRadius: 10,
    marginBottom: 5,
    color: '#2C2948',
    paddingTop: 13,
    paddingBottom: 12,
    paddingRight: 60,
  },
  focus: {
    borderColor: '#7165E3',
    borderWidth: 1,
    paddingLeft: 29,
    borderRadius: 10,
    marginBottom: 5,
    color: '#2C2948',
    paddingTop: 13,
    paddingBottom: 12,
    paddingRight: 45,
    height: 50,
    width: '100%',
    borderTopColor: '#7165E3',
    backgroundColor: 'rgba(113, 101, 227, 0.2)',
    borderRadius: 10,
  },
  eye: {
    position: 'absolute',
    right: 15,
    top: 14,
  },
});

export default InputField;
