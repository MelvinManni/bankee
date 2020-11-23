import React from 'react';
import {View, Text, StatusBar} from 'react-native';

export default function CustomView({
  children,
  background,
  style,
  secondary,
  ...rest
}) {
  const returnColor = (val) => {
    const colorTestReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (
      (background !== null || background !== undefined) &&
      colorTestReg.test(val)
    ) {
      return val;
    } else {
      return '#fff';
    }
  };
  return (
    <View style={{backgroundColor: returnColor(background), ...style}}>
      <StatusBar
        backgroundColor={secondary !== undefined ? '#7165E3' : 'white'}
        barStyle={secondary !== undefined ? 'light-content' : 'dark-content'}
      />
      {children}
    </View>
  );
}
