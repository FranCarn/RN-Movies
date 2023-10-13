import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  return (
    <LinearGradient
      colors={['#084f6a', '#75cedb', '#FFFFFF']}
      style={{...StyleSheet.absoluteFillObject}}
      start={{x: 0.1, y: 0.1}}
      end={{x: 0.5, y: 0.7}}>
      {children}
    </LinearGradient>
  );
};
