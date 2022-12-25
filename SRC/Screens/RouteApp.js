import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from '../Navigation/RouteNavigation';

const RouteApp = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </View>
  );
};

export default RouteApp;
