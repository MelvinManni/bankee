import React, {useEffect, useState} from 'react';
import {Animated, StatusBar, StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  const [animation, setAnimation] = useState({
    titleAnimate: new Animated.Value(0),
    subtitleAnimate: new Animated.Value(0),
  });

  useEffect(() => {
    const {titleAnimate, subtitleAnimate} = animation;
    Animated.parallel([
      Animated.timing(titleAnimate, {
        useNativeDriver: false,
        toValue: 1,
        tension: 13,
        friction: 3,
        duration: 1000,
      }).start(),
      Animated.timing(subtitleAnimate, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1200,
        delay: 800,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('SignUp');
      }, 50);
    });
  }, []);

  return (
    <View style={styles.welcome}>
      <StatusBar backgroundColor="#7165E3" />
      <Animated.Text
        style={{
          ...styles.heading,
          opacity: animation.titleAnimate,
          transform: [
            {
              translateY: animation.titleAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [90, 0],
              }),
            },
          ],
        }}>
        Bankee
      </Animated.Text>

      <Animated.View
        style={{
          opacity: animation.subtitleAnimate,
        }}>
        <Text style={styles.text}>Bank, Finance Kit</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#7165E3',
  },
  heading: {
    marginTop: -100,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 70,
    lineHeight: 91,
    textAlign: 'center',
    letterSpacing: -2,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 29,
  },
});
export default SplashScreen;
