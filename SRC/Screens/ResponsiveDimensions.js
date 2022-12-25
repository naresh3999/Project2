/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {DeviceWidth, DeviceHeight} from './ResponsiveScreen';

const ResponsiveDimensions = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        flexGrow: 1,
        margin: responsiveWidth(2),
      }}>
      <Text
        style={{
          fontSize: DeviceHeight * 0.02,
          color: '#000000',
          fontWeight: 'bold',
        }}>
        USING RESPONSIVE DIMENSIONS
      </Text>
      <Text style={{fontSize: responsiveFontSize(3)}}>
        ResponsiveScreen Height
      </Text>
      <Text style={{fontSize: DeviceHeight * 0.03}}>
        ResponsiveScreen Width
      </Text>
      <TextInput
        style={{
          height: responsiveHeight(8),
          width: responsiveWidth(40),
          backgroundColor: '#fff8f8',
          margin: responsiveWidth(5),
          borderRadius: 10,
        }}
      />
      <TouchableOpacity
        style={{
          height: responsiveHeight(8),
          width: responsiveWidth(60),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f12453',

          borderRadius: DeviceWidth * 0.1,
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: 'white',
            textAlign: 'center',
          }}>
          Click Me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: responsiveHeight(10),
          width: responsiveWidth(40),
          backgroundColor: '#2a1a',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: responsiveWidth(5),
          marginTop: responsiveHeight(2),
        }}>
        <Text style={{fontSize: responsiveFontSize(2), color: 'white'}}>
          Click Me Again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResponsiveDimensions;

const styles = StyleSheet.create({});
