import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TransferHeaderIcons({
  state,
  activeState,
  label,
  icon,
  ...rest
}) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        {...rest}
        style={styles.headerIconHolder}>
        <Icon
          style={[
            styles.headerIcon,
            {
              color:
                state === activeState ? '#fff' : 'rgba(255, 255, 255, 0.6)',
            },
          ]}
          name={icon}
        />
      </TouchableOpacity>

      <Text style={styles.label} >{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerIconHolder: {
    padding: 10,
    width: 40,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#665AD9',
    borderRadius: 10,
  },
  headerIcon: {
    fontSize: 15,
  },
  label: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    lineHeight: 20,
  },
});
