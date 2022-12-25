import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import NavigationWrapper from '../src/navigations/NavigationWrapper'


const AdsRouter = () => {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>    
          <NavigationWrapper />
    </NavigationContainer>
  </View>
  )
}

export default AdsRouter

const styles = StyleSheet.create({})