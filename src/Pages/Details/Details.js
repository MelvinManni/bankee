import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../../Components/Cards/Card';
import CardBody from '../../Components/Cards/CardBody';
import CustomView from '../../Components/View/CustomView';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import CustomLineChart from '../../Components/Charts/LineChart';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const listData = [
  {
    icon: (
      <Image
        style={{
          width: '80%',
        }}
        source={require('../../assets/pizzahut.png')}
      />
    ),
    title: 'PizzaHut',
    text: '4 transactions',
    amount: '200',
  },
  {
    icon: (
      <Image
        style={{
          width: '80%',
        }}
        source={require('../../assets/amazon.png')}
      />
    ),
    title: 'Amazon',
    text: '3 transactions',
    amount: '180',
  },
  {
    icon: (
      <Image
        style={{
          width: '80%',
        }}
        source={require('../../assets/subway.png')}
      />
    ),
    title: 'Subway',
    text: '2 transactions',
    amount: '125',
  },
];

const List = ({icon = '', title, text, amount}) => {
  return (
    <View style={styles.list}>
      <View style={styles.listRow}>
        <Card style={styles.listIcon}>{icon}</Card>
        <View>
          <Text style={styles.listTitle}>{title}</Text>
          <Text style={styles.listText}>{text}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.title, {marginTop: 0, marginBottom: 0}]}>
          ${amount}
        </Text>
      </View>
    </View>
  );
};

export default function DetailsScreen() {
  return (
    <CustomView style={styles.container} secondary>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{paddingHorizontal: 35}}>
            <Text style={styles.headerTitle}>Your balance is $2,639</Text>
            <Text style={styles.headerText}>
              By this time last month, you spent slight higher ($2,719)
            </Text>
          </View>
          <CustomLineChart />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View>
            <Card style={styles.transactionCard}>
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
            <Text style={[styles.title, {paddingTop: 10}]}>
              Top Transaction
            </Text>
            {listData.map((item, index) => {
              const {icon, title, text, amount} = item;
              return (
                <List
                  key={index}
                  icon={icon}
                  title={title}
                  text={text}
                  amount={amount}
                />
              );
            })}
          </View>

          <View>
            <Text style={styles.title}>Top Category</Text>
            <View style={styles.categoryFlex}>
              <Card style={styles.rowCard}>
                <AnimatedCircularProgress
                  size={120}
                  width={10}
                  fill={34}
                  arcSweepAngle={240}
                  rotation={240}
                  style={{borderRadius: 4}}
                  tintColor="#7165E3"
                  backgroundColor="#E6EAEE">
                  {(fill) => <Text style={{fontSize: 42}}>🍔</Text>}
                </AnimatedCircularProgress>

                <View style={styles.centerText}>
                  <Text style={styles.cartegoryTitle}>Lunch & Dinner</Text>
                  <Text style={styles.cartegoryText}>$450</Text>
                  <TouchableOpacity style={styles.cartegoryButton}>
                    <Text style={styles.cartegoryButtonText}>on track</Text>
                  </TouchableOpacity>
                </View>
              </Card>

              <Card style={styles.rowCard}>
                <AnimatedCircularProgress
                  size={120}
                  width={10}
                  fill={72}
                  arcSweepAngle={240}
                  rotation={240}
                  style={{borderRadius: 4}}
                  tintColor="#7165E3"
                  backgroundColor="#E6EAEE">
                  {(fill) => <Text style={{fontSize: 32}}>🏥</Text>}
                </AnimatedCircularProgress>

                <View style={styles.centerText}>
                  <Text style={styles.cartegoryTitle}>Medical Allowances</Text>
                  <Text style={styles.cartegoryText}>$330</Text>
                  <TouchableOpacity style={styles.cartegoryButton}>
                    <Text style={styles.cartegoryButtonText}>on track</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
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
  rowCard: {
    width: '47%',
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  headerTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1939',
    fontSize: 22,
    lineHeight: 29,
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'rgba(28, 25, 57, 0.8)',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 45,
  },
  transactionCard: {
    position: 'absolute',
    width: '100%',
    top: -70,
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
  //list style
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D2D1D7',
    borderBottomWidth: 0.8,
    paddingVertical: 20,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  listIcon: {
    width: 45,
    height: 45,
    borderRadius: 16,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    padding: 10,
  },
  listTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 5,
  },
  listText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'rgba(28, 25, 57, 0.8)',
    fontSize: 15,
    lineHeight: 20,
  },
  // category style
  categoryFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerText: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  cartegoryTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#1C1939',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 5,
  },
  cartegoryText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'rgba(28, 25, 57, 0.8)',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  cartegoryButton: {
    backgroundColor: '#F9F9FB',
    padding: 5,
    borderRadius: 15,
    width: 80,
  },
  cartegoryButtonText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#7D8CBA',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
  },
});
