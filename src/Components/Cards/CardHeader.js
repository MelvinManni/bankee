import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function BudgetCard({children, style}) {
  return <View style={[styles.header, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
