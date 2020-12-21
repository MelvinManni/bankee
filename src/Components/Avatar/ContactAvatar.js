import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const AvatarIcon = ({hasIcon, uri, style}) => (
  <View style={[styles.avatarHolder, style]}>
    {hasIcon === true ? (
      <Image style={styles.avatarThumb} source={{uri: uri}} />
    ) : (
      <Image
        style={styles.defaultAvatar}
        source={require('../../assets/user.png')}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  avatarHolder: {
    padding: 1,
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#665AD9',
    borderRadius: 16,
  },
  avatarThumb: {
    width: '100%',
  },
  defaultAvatar: {
    width: '70%',
  },
});

export default AvatarIcon;
