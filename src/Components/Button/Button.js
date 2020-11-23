import React from 'react';
import { Children } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonLarge = ({title, btnColor,children, ...rest}) => {
  const buttonStyles = [styles.button];
  if (btnColor) {
    buttonStyles.push({backgroundColor: btnColor});
  }

  return (
    <TouchableOpacity {...rest} activeOpacity={0.8}>
      <View style={buttonStyles}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

// const color = {btnColor};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7165E3',
    borderRadius: 5,
    opacity: 1,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default ButtonLarge;
