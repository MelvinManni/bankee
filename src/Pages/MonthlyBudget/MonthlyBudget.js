import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomView from '../../Components/View/CustomView';
import CustomButton from '../../Components/Button/Button';
import {TextInput} from 'react-native-gesture-handler';
import Toggle from '../../Components/Input/Toggle';

export default function MonthlyBudget({navigation}) {
  const [budget, setBudget] = useState('');
  const [toggle, setToggle] = useState(false);
  const currencyRegex = /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/;

  return (
    <CustomView style={styles.container} secondary>
      <View style={styles.header}>
        <TextInput
          value={budget}
          style={styles.input}
          autoFocus={true}
          keyboardType="decimal-pad"
          onChangeText={(e) => {
            console.log(e);
            const value = e.match(currencyRegex);
            setBudget(value === null ? '' : `$${value[0]}`);
          }}
        />
      </View>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Category budget</Text>
            <Text style={styles.text}>You set budget for 3 categories</Text>
          </View>
          <View>
            <Toggle state={toggle} setState={setToggle} />
          </View>
        </View>
        <CustomButton style={{borderRadius: 10}}>Continue</CustomButton>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingVertical: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F8',
    marginBottom: 16,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
  },
  input: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1939',
    fontSize: 40,
    lineHeight: 52,
    backgroundColor: '#fff',
    borderWidth: 0,
    padding: 0,
    minHeight: 100,
    width: 200,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 16,
    lineHeight: 20.83,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#1C1939',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'left',
  },
});
