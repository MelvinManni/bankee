import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../../Components/Cards/Card';
import CardBody from '../../Components/Cards/CardBody';
import CardFooter from '../../Components/Cards/CardFooter';
import VerticalContact from '../../Components/Cards/VerticalContact';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomView from '../../Components/View/CustomView';
import Barcode from 'react-native-barcode-builder';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function QrCodeScreen() {
  const logo = require('../../assets/logo.png');
  return (
    <View>
      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}>
        <CustomView style={styles.container} secondary>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>My QR Code</Text>
          </View>

          <Card style={styles.card}>
            <CardBody style={{padding: 0}}>
              <VerticalContact
                descriptive
                name="Hailey Sanders"
                title="Profile name"
                style={{borderBottomWidth: 0, paddingVertical: 10}}
              />
            </CardBody>
            <CardFooter style={styles.cardFooter}>
              <View
                style={{
                  marginBottom: 40,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Barcode
                  width={1.5}
                  height={70}
                  value="Hello World"
                  format="CODE128"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <QRCode
                  logo={logo}
                  size={150}
                  value="https://github.com/MelvinManni/bankee"
                />
              </View>
            </CardFooter>
          </Card>
          <View style={styles.footInset}>
            <View style={styles.light}>
              <Icon name="lightbulb-on" color="#7165E3" size={24} />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.text}>
                Simply show the QR code and your friends can scan and tap!
              </Text>
              <Text style={styles.title}>More details</Text>
            </View>
          </View>
          <FooterBottomLine style={{borderBottomColor: '#fff'}} />
        </CustomView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    alignItems: 'center',
    backgroundColor: '#7165E3',
    overflow: 'scroll',
  },
  scroll: {
    backgroundColor: '#7165E3',
    overflow: 'scroll',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 50,
  },
  headerTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 26.04,
  },
  card: {
    width: '100%',
  },
  cardFooter: {
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  footInset: {
    backgroundColor: '#665AD9',
    padding: 18,
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    marginBottom: 20,
  },
  light: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 19,
    marginRight: 15,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 19,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: ' rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    lineHeight: 20,
  },
  bottomTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 20.83,
  },
});
