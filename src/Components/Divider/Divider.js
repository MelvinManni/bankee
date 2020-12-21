import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Divider({style}) {
  return (
    <View style={styles.dividerHolder}>
      <View style={[styles.divider, style]} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginVertical: 5,
    height: 0.5,
    width: '100%',
    backgroundColor: '#D2D1D7',
  },
});
