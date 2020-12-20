import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function TextButton({children, style, ...rest}) {
  return (
    <TouchableOpacity {...rest}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    color: '#7165E3',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 20,
  },
});
