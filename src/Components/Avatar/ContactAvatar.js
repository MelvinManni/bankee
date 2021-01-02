import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const AvatarIcon = ({hasIcon, uri, style}) => (
  <View style={[styles.avatarHolder, style]}>
    {hasIcon === true ? (
      <Image style={styles.avatarThumb} source={{uri: uri}} />
    ) : (
      <Icon style={styles.defaultAvatar} name="user-o" />
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
    fontSize: 24,
    color: "#fff"
  },
});

export default AvatarIcon;
