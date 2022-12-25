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

const {width, height} = Dimensions.get('window');
export const DeviceWidth = width;
export const DeviceHeight = height;

const ResponsiveScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        flexGrow: 1,
        margin: DeviceWidth * 0.02,
      }}>
      <Text
        style={{
          fontSize: DeviceHeight * 0.02,
          color: '#000000',
          fontWeight: 'bold',
        }}>
        USING DIMENSIONS
      </Text>
      <Text style={{fontSize: DeviceHeight * 0.03}}>
        ResponsiveScreen Height
      </Text>
      <Text style={{fontSize: DeviceHeight * 0.03}}>
        ResponsiveScreen Width
      </Text>
      <TextInput
        style={{
          height: DeviceHeight * 0.09,
          width: DeviceWidth * 0.8,
          backgroundColor: '#fff8f8',
          margin: DeviceHeight * 0.02,
          borderRadius: DeviceWidth * 0.02,
        }}
      />
      <TouchableOpacity
        style={{
          height: DeviceHeight * 0.1,
          width: DeviceWidth * 0.6,
          backgroundColor: '#f12453',
          borderRadius: DeviceWidth * 0.1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: DeviceHeight * 0.02, color: 'white'}}>
          Button-1
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
          Button-2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResponsiveScreen;

const styles = StyleSheet.create({});
