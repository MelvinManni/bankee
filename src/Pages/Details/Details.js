import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../../Components/Cards/Card';
import CardBody from '../../Components/Cards/CardBody';
import CustomView from '../../Components/View/CustomView';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Divider from '../../Components/Divider/Divider';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomLineChart from '../../Components/Charts/LineChart';

const curveHeight = Dimensions.get('window').height * 0.4;
const curveWidth = Dimensions.get('window').width;

export default function DetailsScreen() {
  const [verifyPercent] = useState(75);

  return (
    <CustomView style={styles.container} secondary>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <CustomLineChart />
        </View>
        <View style={{paddingHorizontal: 35}}>
          <View>
            <Card>
              <CardBody style={{marginBottom: 0}}>
                <View style={styles.transactionContainer}>
                  {/* //earned */}
                  <View>
                    <Text style={styles.transactionText}>Earned</Text>
                    <View style={styles.transactionFlex}>
                      <View
                        style={[
                          styles.transactionIndicator,
                          {backgroundColor: '#967AF3'},
                        ]}
                      />
                      <Text style={styles.transactionTitle}>$2,730</Text>
                    </View>
                  </View>

                  {/* spent */}
                  <View>
                    <Text style={styles.transactionText}>Spent</Text>
                    <View style={styles.transactionFlex}>
                      <View
                        style={[
                          styles.transactionIndicator,
                          {backgroundColor: '#FF5141'},
                        ]}
                      />
                      <Text style={styles.transactionTitle}>$1,460</Text>
                    </View>
                  </View>
                </View>
              </CardBody>
            </Card>
          </View>

          <View>
            <Text style={styles.title}>Activity</Text>
            <View style={styles.activityFlex}>
              <Card style={styles.rowCard}>
                <View style={styles.activityIconHolder}>
                  <Icon style={styles.activityIcon} name="send" />
                </View>
                <Text style={styles.text}>Transfer</Text>
              </Card>

              <Card style={styles.rowCard}>
                <View style={styles.activityIconHolder}>
                  <Icon style={styles.activityIcon} name="credit-card-alt" />
                </View>
                <Text style={styles.text}>My Card</Text>
              </Card>

              <Card style={styles.rowCard}>
                <View style={styles.activityIconHolder}>
                  <Icon style={styles.activityIcon} name="bar-chart" />
                </View>
                <Text style={styles.text}>Insight</Text>
              </Card>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Complete Verification</Text>

            <Card>
              <View style={styles.verifyFlex}>
                <Text style={styles.verifyFlexTitle}>{verifyPercent}%</Text>
                <Text style={styles.verifyFlexText}>7 of 10 completed</Text>
              </View>

              <View style={styles.verifyBar}>
                <View
                  style={[styles.verifyProgress, {width: `${verifyPercent}%`}]}
                />
              </View>
              <Divider style={{marginBottom: 15}} />
              <View style={styles.row}>
                <Icon name="user" style={styles.verifyIcon} />
                <View>
                  <Text style={styles.subTitle}>Personal Information</Text>
                  <Text style={[styles.text, {marginBottom: 17}]}>
                    When you register for an account, we collectt personal
                    informmation
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={[
                        styles.text,
                        {color: '#7165E3', fontWeight: 'bold'},
                      ]}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Divider style={{width: '80%', ...styles.verifyGap}} />
              <View style={styles.row}>
                <Icon name="id-card" style={styles.verifyIcon} />
                <Text style={styles.text}>Verification</Text>
              </View>
              <Divider style={{width: '80%', ...styles.verifyGap}} />
              <View style={[styles.row, {marginBottom: 20}]}>
                <EntypoIcon name="mail" style={styles.verifyIcon} />
                <Text style={styles.text}>Verification</Text>
              </View>
            </Card>
          </View>

          <View>
            <Text style={styles.title}>News and promo</Text>

            <Card style={{padding: 0}}>
              <Image
                style={{
                  width: '100%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  // height: 40,
                }}
                source={require('../../assets/news.png')}
              />
              <CardBody style={{padding: 15}}>
                <Text style={styles.subTitle}>Share Invite your friends!</Text>
                <Text style={[styles.text, {marginBottom: 17}]}>
                  Invite friends register on our app. For every user you invite.
                  you can earn up $12
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.text,
                      {color: '#7165E3', fontWeight: 'bold'},
                    ]}>
                    Invite Now
                  </Text>
                </TouchableOpacity>
              </CardBody>
            </Card>
          </View>

          <FooterBottomLine />
        </View>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  row: {
    flexDirection: 'row',
  },
  rowCard: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 18,
    lineHeight: 23,
    marginTop: 30,
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 13,
    lineHeight: 20,
  },
  blockView: {
    backgroundColor: '#7165E3',
    width: curveWidth,
    height: curveHeight,
    position: 'absolute',
    top: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 55,
    marginBottom: 35,
  },

  balance: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 35,
    lineHeight: 46,
    marginBottom: 3,
  },
  balanceText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 3,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 1,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#7165E3',
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 24,
    lineHeight: 31,
  },
  transactionText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'rgba(28, 25, 57, 0.8)',
    fontSize: 11,
    lineHeight: 14,
    marginBottom: 5,
  },
  transactionIndicator: {
    elevation: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  // activity style
  activityFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityIconHolder: {
    padding: 10,
    width: 40,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#7165E3',
    borderRadius: 10,
  },
  activityIcon: {
    color: '#fff',
    fontSize: 15,
  },

  //Verification style
  verifyFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  verifyFlexTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 25,
    lineHeight: 32,
  },
  verifyFlexText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 12,
    lineHeight: 15.2,
  },
  verifyBar: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(28, 25, 57, 0.2)',
    borderRadius: 5,
    marginBottom: 20,
  },
  verifyProgress: {
    height: '100%',
    backgroundColor: '#7165E3',
    borderRadius: 5,
  },
  verifyGap: {
    marginVertical: 20,
  },
  verifyIcon: {
    color: '#7165E3',
    fontSize: 15,
    marginRight: 20,
  },
});
