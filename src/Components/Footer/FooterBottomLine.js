import React from 'react';
import {View, StyleSheet} from 'react-native';

const FooterBottomLine = ({style}) => {
  return <View style={[styles.bottomLine, style]}></View>;
};

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomColor: '#7165E3',
    borderBottomWidth: 5,
    borderRadius: 2.5,
    width: 100,
    alignSelf: 'center',
    marginVertical: 25,
  },
});

export default FooterBottomLine;
