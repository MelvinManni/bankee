import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../../Components/Cards/Card';
import CardBody from '../../Components/Cards/CardBody';
import CardFooter from '../../Components/Cards/CardFooter';
import CustomView from '../../Components/View/CustomView';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Divider from '../../Components/Divider/Divider';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import {signNumber} from '../../Utils/utils';
import TextButton from '../../Components/Button/TextButton';

const curveHeight = Dimensions.get('window').height * 0.4;
const curveWidth = Dimensions.get('window').width;

export default function SavingScoreScreen() {
  const [verifyPercent] = useState(75);

  return (
    <CustomView style={styles.container} secondary>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scoreView}>
          <View style={styles.imageHolder}>
            <Text style={styles.scoreViewTitle}>Finance Score</Text>
            <Image
              style={styles.image}
              source={require('../../assets/financeScore.png')}
            />
            <Text style={styles.totalScore}>72</Text>
          </View>
          <Text style={styles.scoreViewText}>It can be better!</Text>
          <Text style={styles.scoreViewSubtext}>
            Below are some recommendations
          </Text>
        </View>
        <View style={{paddingHorizontal: 35}}>
          <View>
            <Text style={styles.title}>Recommendation</Text>

            <Card>
              <CardBody style={styles.row}>
                <View style={styles.scoreHolder}>
                  <Text style={styles.scoreText}>{signNumber(17)}</Text>
                </View>
                <View
                  style={{
                    flexShrink: 1,
                  }}>
                  <Text style={styles.subTitle}>Spending</Text>
                  <Text style={styles.text}>
                    You spent $468 on food. That’s 50% higher than normal
                  </Text>
                  <TextButton style={{fontSize: 15, padding: 0}}>
                    More Details
                  </TextButton>
                </View>
              </CardBody>
            </Card>

            <Card>
              <CardBody style={styles.row}>
                <View style={styles.scoreHolder}>
                  <Text style={styles.scoreText}>{signNumber(8)}</Text>
                </View>
                <View
                  style={{
                    flexShrink: 1,
                  }}>
                  <Text style={styles.subTitle}>Credit</Text>
                  <Text style={styles.text}>
                    You paid $120 for annual credit card fee. Let’s try to make
                    it
                  </Text>
                  <TextButton style={{fontSize: 15, padding: 0}}>
                    More Details
                  </TextButton>
                </View>
              </CardBody>
            </Card>
          </View>
        </View>
        <FooterBottomLine />
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  scoreView: {
    backgroundColor: '#7165E3',
    width: curveWidth,
    minHeight: curveHeight,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 45,
    paddingBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  imageHolder: {
    width: '75%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
  },
  totalScore: {
    position: 'absolute',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFB600',
    fontSize: 45,
    lineHeight: 58.59,
    bottom: 45,
  },
  scoreViewTitle: {
    position: 'absolute',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 26.04,
    top: 10,
  },
  scoreViewText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22,
    lineHeight: 28.6,
  },
  scoreViewSubtext: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    lineHeight: 25,
    opacity: 0.8,
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
    marginTop: 40,
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9EA6BE',
    fontSize: 16,
    lineHeight: 20.83,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 13,
    lineHeight: 20,
    flexShrink: 1,
    marginBottom: 15,
  },
  scoreHolder: {
    padding: 5,
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7165E3',
    borderRadius: 16,
    marginRight: 20,
  },
  scoreText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
  },
});
