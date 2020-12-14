import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SetPinKeyBoard({state, setState}) {
  const handleKeyPress = (val) => {
    if (state.toString().length < 4) {
      const newValue = state.toString() + val;
      setState(newValue);
    }
  };

  const handleBackspace = (val) => {
    if (state.toString().length === 1) {
      return setState('');
    }

    if (state.toString().length > 0) {
      const newValue = state
        .toString()
        .substring(0, state.toString().length - 1);
      setState(newValue);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(1);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(2);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(3);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(4);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(5);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(6);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(7);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(8);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleKeyPress(9);
          }}
          style={styles.col}
          activeOpacity={0.75}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <View style={styles.bottomRow}>
          <TouchableOpacity
            onPress={() => {
              handleKeyPress(0);
            }}
            style={styles.col}
            activeOpacity={0.75}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleBackspace}
            style={styles.col}
            activeOpacity={0.75}>
            <Icon
              name="backspace-outline"
              size={20}
              color="#1C1939"
              style={styles.text}
              // onPress={() => swapIcon()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  col: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '30%',
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: '#1C1939',
  },
});
