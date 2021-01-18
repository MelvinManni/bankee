import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const Toggle = ({state, setState}) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: 'rgba(120, 120, 128, 0.16)', true: '#7165E3'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="rgba(120, 120, 128, 0.16)"
        onValueChange={() => {
          setState(!state);
        }}
        value={state}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Toggle;
