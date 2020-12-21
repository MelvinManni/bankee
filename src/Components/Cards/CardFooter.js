import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function CardFooter({children, style}) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: 15,
    paddingBottom: 5,
    borderTopWidth: 0.5,
    borderColor: '#D2D1D7',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
