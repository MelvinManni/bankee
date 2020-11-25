import React from 'react';
import {Children} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({secondary, children, rounded, ...rest}) => {
  const buttonStyles = [styles.button];
  if (secondary !== undefined) {
    buttonStyles.push({backgroundColor: '#9EA6BE'});
  }

  if (rounded !== undefined) {
    buttonStyles.push({borderRadius: 18.5});
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
    margin: 5,
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

export default CustomButton;
