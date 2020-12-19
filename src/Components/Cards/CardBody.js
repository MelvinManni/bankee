import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function CardBody({children, style}) {
  return <View style={[styles.body, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  body: {
    marginBottom: 20,
  },
});
