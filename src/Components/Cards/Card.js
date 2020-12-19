import React from 'react';
import {View, StyleSheet} from 'react-native';

function Card({children, style}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
});

export default Card;
