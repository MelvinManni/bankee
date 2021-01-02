import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AvatarIcon from '../Avatar/ContactAvatar';
import CustomButton from '../Button/Button';

export default function VerticalContact({
  hasIcon,
  showInvite,
  uri,
  name,
  number,
  ...rest
}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AvatarIcon hasIcon={hasIcon} uri={uri} />
        <View style={{marginLeft: 15}}>
          <Text style={[styles.contactName]}>{name}</Text>
          <Text style={[styles.contactNumber]}>{number}</Text>
        </View>
      </View>

      {showInvite === true && (
        <View>
          <CustomButton
            {...rest}
            style={{width: 73, height: 35, paddingVertical: 0}}
            secondary>
            Invite
          </CustomButton>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#D2D1D7',
    borderBottomWidth: 0.5,
  },
  contactName: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 20,
  },
  contactNumber: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9EA6BE',
    fontSize: 12,
    lineHeight: 15.6,
  },
});
