import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors} = useContext(GradientContext);
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary, '#FFFFFF']}
      style={{...StyleSheet.absoluteFillObject}}
      start={{x: 0.1, y: 0.1}}
      end={{x: 0.5, y: 0.7}}>
      {children}
    </LinearGradient>
  );
};
