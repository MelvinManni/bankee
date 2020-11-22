import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
  } from 'react-native';

const EmailInputField = ({ emailFocus,emailText,setEmailText,setEmailFocus }) => {
    return (
        

        <View>
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={text => setEmailText(text)}
                value={emailText}
                onBlur={() => setEmailFocus(false)}
                onFocus={() => setEmailFocus(true)}
                style={emailFocus ? styles.input : styles.email}
            />
        </View>
    );
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

})
export default EmailInputField;
