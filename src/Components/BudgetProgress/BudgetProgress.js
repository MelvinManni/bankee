import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BudgetProgress = ({type, children, progress}) => {
  const buttonStyles = [styles.button];
  if (type === 'secondary') {
    buttonStyles.push({backgroundColor: '#9EA6BE'});
  }

  if (type === 'dark') {
    buttonStyles.push({backgroundColor: '#1C1939'});
  }

  if (progress <= 100) {
    buttonStyles.push({width: `${progress}%`});
  } else {
    buttonStyles.push({
      width: '100%',
      backgroundColor: '#EB001B',
    });
  }
  return (
    <View style={buttonStyles}>
      <Text style={styles.text}>${children}</Text>
      {progress > 100 && (
        <Icon
          style={{
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 14,
          }}
          name="alert-triangle"
        />
      )}
    </View>
  );
};

// const color = {btnColor};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7165E3',
    borderRadius: 18.5,
    opacity: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },
  text: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
    letterSpacing: 0.5,
    minWidth: 100,
    minHeight: 30,
    textAlignVertical: 'center',
  },
});

export default BudgetProgress;
