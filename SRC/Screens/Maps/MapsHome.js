import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

export default function MapsHome() {
  return (
    <SafeAreaView>
      <Text>MapsHome</Text>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          // latitude: 37.78825,
          // longitude: -122.4324,
          latitude: 17.385, //Hyderabad
          longitude: 78.4867, //Hyderabad
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
