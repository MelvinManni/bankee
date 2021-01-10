import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../../Components/Cards/Card';
import CustomView from '../../Components/View/CustomView';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';

const listData = [
  {
    id: '0',
    emoji: '🍔',
    title: 'Lunch & Dinner',
    category: 'food',
    currentSpending: 420,
    text: '4 transactions',
  },
  {
    id: '1',
    emoji: '⛽',
    title: 'Car fuel',
    currentSpending: 600,
    text: '3 transactions',
  },

  {
    id: '2',
    emoji: '🏥',
    title: 'Medical Allowances',
    currentSpending: 230,
    text: '3 transactions',
  },

  {
    id: '3',
    emoji: '🏠',
    title: 'House Rent',
    currentSpending: 180,
    text: '1 transactions',
  },

  {
    id: '4',
    emoji: '📺',
    title: 'Netflix Subscription',
    currentSpending: 230,
    text: '3 transactions',
  },
];

const List = ({icon, title, text, progress, amount}) => {
  return (
    <View style={styles.list}>
      <View style={styles.listRow}>
        <Text style={styles.listIcon}>{icon}</Text>
        <View style={{flex: 1}}>
          <View style={styles.spaced}>
            <View>
              <Text style={styles.listTitle}>{title}</Text>
              <Text style={styles.listText}>{text}</Text>
            </View>
            <Text style={[styles.price, {marginTop: 0, marginBottom: 0}]}>
              ${amount}
            </Text>
          </View>
          <View style={styles.listBar}>
            <View
              style={[
                styles.listProgress,
                {
                  width:
                    progress === undefined || isNaN(progress)
                      ? 0
                      : `${progress}%`,
                },
              ]}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function ExpenseScreen({navigation}) {
  return (
    <CustomView style={styles.container} secondary>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/expense.png')}
          />
          <Text style={styles.headerAmount}>$1860</Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <View>
            {listData.map((item, index) => {
              const {emoji, title, text, currentSpending} = item;
              return (
                <List
                  key={item.id}
                  icon={emoji}
                  title={title}
                  text={text}
                  amount={currentSpending}
                  progress={(currentSpending / 1000) * 100}
                />
              );
            })}
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
    backgroundColor: '#fff',
  },
  rowCard: {
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  headerImage: {
    width: 260,
    height: 260,
  },

  headerAmount: {
    position: 'absolute',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1939',
    fontSize: 22,
    lineHeight: 28.64,
  },
  //list style
  price: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#1C1939',
    fontSize: 20,
    lineHeight: 26,
  },
  list: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#D2D1D7',
    borderBottomWidth: 0.8,
    paddingVertical: 20,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  spaced: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listIcon: {
    fontSize: 24,
    marginRight: 20,
  },
  marginBottom: 20,
  listTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 20.83,
    marginBottom: 10,
  },
  listText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'rgba(28, 25, 57, 0.8)',
    fontSize: 15,
    lineHeight: 20,
  },
  listBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(28, 25, 57, 0.2)',
    borderRadius: 5,
    marginTop: 10,
  },
  listProgress: {
    height: '100%',
    backgroundColor: '#7165E3',
    borderRadius: 5,
  },
});
