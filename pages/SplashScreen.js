import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';


const SplashScreen = () => {
  return (
    <View style={styles.welcome}>
        <StatusBar backgroundColor="#7165E3" />
        <Text style={styles.heading}>Bankee</Text>
        <Text style={styles.text}>Bank, Finance Kit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#7165E3',
  },
  heading:{
    marginTop:-100,
    fontSize:50,
    color:'#fff',
  },
  text:{
    color:'#fff',
  }


})
export default SplashScreen;
