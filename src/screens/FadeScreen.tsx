import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';

export const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: '#fff',
          borderWidth: 10,
          marginBottom: 30,
          opacity,
        }}></Animated.View>
      <Button title="Animate" onPress={fadeIn} />
    </View>
  );
};
