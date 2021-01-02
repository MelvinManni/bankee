import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AvatarIcon from '../Avatar/ContactAvatar';

export default function HorizontalContact({name, hasIcon, uri, style, number}) {
  return (
    <View style={[styles.container, style]}>
      <AvatarIcon hasIcon={hasIcon} uri={uri} />
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactNumber}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  contactName: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
  },
  contactNumber: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9EA6BE',
    fontSize: 12,
    lineHeight: 15.6,
  },
});
