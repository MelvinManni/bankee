import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

const SearchInput = ({style, focus, ...rest}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={[focus ? styles.focus : styles.input, style]}
      />
      <Icon style={styles.icon} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    marginBottom: 5,
    color: '#2C2948',
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 25,
    paddingLeft: 60,
    height: 50,
    width: '100%',
    color: '#9EA6BE',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  focus: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingRight: 25,
    paddingLeft: 60,
    borderRadius: 10,
    marginBottom: 5,
    color: '#2C2948',
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(113, 101, 227, 0.2)',
    borderRadius: 10,
    color: '#9EA6BE',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  icon: {
    position: 'absolute',
    fontSize: 32,
    left: 18,
    color: '#8F96AD',
    bottom: 17
  },
});

export default SearchInput;
