import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BudgetProgress from '../BudgetProgress/BudgetProgress';

export default function BudgetCard({
  title,
  emoji,
  currentSpending,
  budget,
  ratePrice,
  rateTime,
  category,
  type,
  ...rest
}) {
  const progress = parseInt((Number(currentSpending) / Number(budget)) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {emoji} {title}
        </Text>
        <Text style={styles.rate}>
          ${ratePrice}/{rateTime}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.progressContainer}>
          <BudgetProgress type={type} progress={progress} {...rest}>
            {currentSpending}
          </BudgetProgress>
        </View>
        <View
          style={{
            width: '20%',
            paddingHorizontal: 10,
          }}>
          <Text style={styles.budget}>${budget}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={
            budget > currentSpending
              ? {...styles.check, ...styles.checked}
              : styles.check
          }>
          <Icon
            name="check"
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 14,
            }}
          />
        </View>
        <Text style={styles.footerText}>
          Your {category} spending is still on track
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 18,
  },
  rate: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#1C1939',
    fontSize: 14,
    lineHeight: 18,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  progressContainer: {
    width: '80%',
    paddingRight: 10,
    borderRightWidth: 2,
    borderRightColor: '#7165E3',
  },
  budget: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#7D8CBA',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  footer: {
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderColor: '#D2D1D7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7D8CBA',
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#7165e3',
  },
  footerText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#9EA6BE',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
});
