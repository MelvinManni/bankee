import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../Components/Button/Button';
import Card from '../../Components/Cards/Card';
import CardBody from '../../Components/Cards/CardBody';
import CardFooter from '../../Components/Cards/CardFooter';
import VerticalContact from '../../Components/Cards/VerticalContact';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomView from '../../Components/View/CustomView';

const curveWidth = Dimensions.get('window').width;

export default function RecieptScreen() {
  return (
    <ScrollView>
      <CustomView style={styles.container} secondary>
        <View style={styles.header}>
          <Image
            style={{width: '100%'}}
            source={require('../../assets/reciepts.png')}
          />
          <Text style={styles.headerTitle}>My Receipt</Text>
        </View>

        <Card style={styles.card}>
          <CardBody>
            <View style={styles.cardEmoji}>
              <Text style={{fontSize: 34}}>🍔</Text>
            </View>
            <Text style={styles.recieptTitle}>Transfer done</Text>
          </CardBody>
          <CardFooter style={styles.cardFooter}>
            <View style={[styles.cardCircle, {left: -28}]}></View>
            <View style={[styles.cardCircle, {right: -28}]}></View>

            <VerticalContact
              descriptive
              name="Hailey Sanders"
              title="Recipient"
              style={{borderBottomWidth: 0, marginBottom: 20}}
            />

            <View>
              <Text style={styles.text}>Reference number</Text>
              <Text style={styles.title}>#D79004321786</Text>
            </View>

            <View style={styles.footerRow}>
              <View style={{width: '49%'}}>
                <Text style={styles.text}>Amount sent</Text>
                <Text style={styles.title}>$46.09</Text>
              </View>

              <View style={{width: '49%'}}>
                <Text style={styles.text}>Transfer fee</Text>
                <Text style={[styles.title]}>$0.00</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <CustomButton style={styles.button}>Share</CustomButton>
            </View>
          </CardFooter>
        </Card>

        <Text style={styles.bottomTitle}>
          It will take less than 24 hours to process it
        </Text>
        <FooterBottomLine style={{borderBottomColor: '#fff'}} />
      </CustomView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7165E3',
    paddingHorizontal: 28,
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    position: 'absolute',
    bottom: 20,
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
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: 40,
  },
  cardEmoji: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBD133',
    borderRadius: 20,
    alignSelf: 'center',
  },
  recieptTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1939',
    fontSize: 20,
    lineHeight: 20,
    marginTop: 15,
  },
  cardCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    top: -15,
    backgroundColor: '#7165E3',
  },
  button: {
    width: '90%',
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 15,
    lineHeight: 20,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9EA6BE',
    fontSize: 12,
    lineHeight: 15.6,
  },
  bottomTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 20.83,
    marginTop: 20,
    width: '80%',
  },
});
