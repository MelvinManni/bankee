import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const config = {
  backgroundColor: '#F9F9FB',
  backgroundGradientFrom: '#F9F9FB',
  backgroundGradientTo: '#F9F9FB',
  fillShadowGradient: '#7165E3',
  fillShadowGradientOpacity: 1,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: () => '#697596',
  labelColor: () => '#697596',
  style: {
    // paddingHorizontal: 30,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#000',
  },
};

export default function CustomLineChart() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <LineChart
          data={{
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
            datasets: [
              {
                data: [
                  162 / 1000,
                  3431 / 1000,
                  1200 / 1000,
                  2460 / 1000,
                  4531 / 1000,
                  540 / 1000,
                ],
              },
            ],
          }}
          withInnerLines={false}
          withOuterLines={false}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={config}
          bezier
          style={{
            marginVertical: 8,
          }}
        />
      </View>
    </View>
  );
}
