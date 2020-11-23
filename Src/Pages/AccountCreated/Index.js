import React from 'react';
import {StatusBar, StyleSheet, Image, Text, View} from 'react-native';


const AccountCreated = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image style={styles.image} source={require("../../assets/Thumbs-Up.png")} />
      </View>
      <View>
        <Text style={styles.title}>Account Created!</Text>
        <Text style={{...styles.text, ...styles.mt}}>Dear user your account has been created successfully. Continue to start using app</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
  },
  mt: {
    marginTop: 20,
  },
  imageHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 46,
    textAlign: 'center',
    color: '#1C1939',
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: 'rgba(28, 25, 57, 0.8)',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#7165E3',
  },
});
export default AccountCreated;
