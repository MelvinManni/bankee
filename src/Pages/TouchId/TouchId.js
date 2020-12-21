import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../Components/Button/Button';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomView from '../../Components/View/CustomView';

const screenWIdth = Math.round(Dimensions.get('window').width);

const TouchId = ({navigation}) => {
  return (
    <CustomView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableOpacity activeOpacity={0.7} style={styles.imageHolder}>
        <Image
          style={styles.image}
          source={require('../../assets/fingerId.png')}
        />
      </TouchableOpacity>
      <View style={styles.mt}>
        <Text style={styles.title}>Use Touch ID to authorise payments</Text>
        <Text style={{...styles.text, ...styles.mt}}>
          Activate touch ID so you Don’t need to confirm your PIN every time you
          want to send money
        </Text>
      </View>

      <View style={[styles.mt, {width: '100%'}]}>
        <CustomButton>Activate Now</CustomButton>
        <CustomButton
          onPress={() => {
            navigation.navigate('BudgetScreen');
          }}
          secondary>
          Skip This
        </CustomButton>
      </View>
      <FooterBottomLine />
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
    paddingTop: 10,
  },
  mt: {
    marginTop: 10,
  },
  imageHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: screenWIdth * 0.75,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 28,
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
export default TouchId;
