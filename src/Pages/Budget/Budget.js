import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import BudgetCard from '../../Components/Cards/BudgetCard';
import CustomView from '../../Components/View/CustomView';

const curveHeight = Dimensions.get('window').height * 0.4;
const curveWidth = Dimensions.get('window').width;

const data = [
  {
    id: '0',
    emoji: '🍔',
    title: 'Lunch & Dinner',
    category: 'food',
    currentSpending: 420,
    budget: 900,
    ratePrice: 52,
    rateTime: 'day',
    type: '',
  },
  {
    id: '1',
    emoji: '⛽',
    title: 'Car fuel',
    category: 'transport',
    currentSpending: 600,
    budget: 900,
    ratePrice: 20,
    rateTime: 'day',
    type: 'secondary',
  },

  {
    id: '2',
    emoji: '🏥',
    title: 'Medical Allowances',
    category: 'health',
    currentSpending: 230,
    budget: 900,
    ratePrice: 30,
    rateTime: 'day',
    type: '',
  },

  {
    id: '3',
    emoji: '📺',
    title: 'Netflix Subscription',
    category: 'entertainment',
    currentSpending: 230,
    budget: 200,
    ratePrice: 115,
    rateTime: 'month',
    type: '',
  },
];

export default function BudgetScreen() {
  const renderItem = ({item}) => {
    const {
      emoji,
      title,
      category,
      currentSpending,
      budget,
      ratePrice,
      rateTime,
      type,
    } = item;
    return (
      <BudgetCard
        emoji={emoji}
        type={type}
        title={title}
        category={category}
        currentSpending={currentSpending}
        budget={budget}
        ratePrice={ratePrice}
        rateTime={rateTime}
      />
    );
  };

  return (
    <CustomView style={styles.container} secondary>
      <View style={styles.curveView}></View>
      <View style={styles.header}>
        <Text style={[styles.headerTitle]}>Budget</Text>
        <ScrollView
          alwaysBounceHorizontal={true}
          contentContainerStyle={{
            width: '100%',
            justifyContent: 'center',
            flex: 1,
          }}
          // centerContent={true}
          horizontal={true}>
          <View style={{opacity: 0.5}}>
            <Text style={styles.moneyDisplay}>$172</Text>
            <Text style={styles.headerText}>spent this month</Text>
          </View>

          <View
            style={{
              width: '75%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.moneyDisplay}>$172</Text>
            <Text style={styles.headerText}>spent this month</Text>
          </View>

          <View style={{opacity: 0.5}}>
            <Text style={styles.moneyDisplay}>$172</Text>
            <Text style={styles.headerText}>spent this month</Text>
          </View>
        </ScrollView>
      </View>
      <FlatList
        style={{
          paddingHorizontal: 25,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  curveView: {
    backgroundColor: '#7165E3',
    width: curveWidth,
    height: curveHeight,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    marginBottom: 40,
    marginTop: 15,
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 26,
    marginBottom: 30,
  },
  moneyDisplay: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 35,
    lineHeight: 46,
    marginBottom: 5,
  },
  headerText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 18,
  },
});
