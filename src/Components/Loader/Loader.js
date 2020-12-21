import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

export default function Loader({type, size}) {
  return (
    <ActivityIndicator
      size={size !== undefined ? size : 'large'}
      color={
        type === 'primary'
          ? '#7165E3'
          : type === 'secondary'
          ? '#FBD133'
          : type === 'white'
          ? '#FFFFFF'
          : '#7165E3'
      }
    />
  );
}
