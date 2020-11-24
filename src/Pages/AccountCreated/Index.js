import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
import CustomButton from '../../Components/Button/Button';
import CustomView from '../../Components/View/CustomView';

const screenWIdth = Math.round(Dimensions.get('window').width);

const AccountCreated = () => {
  return (
    <CustomView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.imageHolder}>
        <Image
          style={styles.image}
          source={require('../../assets/Thumbs-Up.png')}
        />
      </View>
      <View style={styles.mt}>
        <Text style={styles.title}>Account Created!</Text>
        <Text style={{...styles.text, ...styles.mt}}>
          Dear user your account has been created successfully. Continue to
          start using app
        </Text>
      </View>

      <View style={styles.mt} >
        <CustomButton>
          Continue
        </CustomButton>
        <Text style={{...styles.text, ...styles.mt}}>
          by clicking start, you agree to our{' '}
          <Text style={styles.link}>Privacy Policy</Text> our{' '}
          <Text style={styles.link}>Teams and Conditions</Text>
        </Text>
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 35,
    paddingVertical: 55,
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
    width: screenWIdth * 0.75,
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
