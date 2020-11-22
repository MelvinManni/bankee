import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
  } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const PasswordInputField = ({ passwordFocus, isPassword,setPasswordText,passwordText,eyeIcon,setPasswordFocus,changePasswordViewIcon }) => {
    return (
        <View>
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={isPassword}
                onChangeText={text => setPasswordText(text)}
                value={passwordText}
                onBlur={() => setPasswordFocus(false)}
                onFocus={() => setPasswordFocus(true)}
                style={passwordFocus ? styles.input : styles.email}
            />

            <TouchableOpacity style={styles.eye}>
                <Icon
                    name={eyeIcon}
                    size={20}
                    color="rgba(0,0,0,0.3)"
                    onPress={() => changePasswordViewIcon()}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    email: {
        backgroundColor: '#F7F7F7',
        borderColor: '#F7F7F7',
        borderWidth: 1,
        paddingLeft: 29,
        borderRadius: 10,
        marginBottom: 5,
        color: '#2C2948',
        paddingTop: 13,
        paddingBottom: 12,
        paddingRight: 29,
      },
      input: {
        borderColor: '#7165E3',
        borderWidth: 1,
        paddingLeft: 29,
        backgroundColor: 'rgba(113, 101, 227, 0.2)',
        borderRadius: 10,
        marginBottom: 5,
        color: '#2C2948',
        paddingTop: 13,
        paddingBottom: 12,
        paddingRight: 45,
      },
      eye: {
        position: 'absolute',
        top: 20,
        right: 19,
    },

})

export default PasswordInputField;
