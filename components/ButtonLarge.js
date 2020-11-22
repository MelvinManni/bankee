import React from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ButtonLarge = ({title, btnColor}) => {

    const buttonStyles = [styles.button];
    if (btnColor) {
        buttonStyles.push({backgroundColor:btnColor})
    }

    return (
      
      <TouchableOpacity activeOpacity={0.8}>
        <View style={buttonStyles}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
}

// const color = {btnColor};
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#7165E3',
        borderRadius: 5,
        opacity:1,
        width:'100%',
    },
    text:{
        paddingVertical:8,
        textAlign: 'center',
        color:'#fff',
        fontSize:18,
        fontWeight:'500',
        
    }
})

export default ButtonLarge;
