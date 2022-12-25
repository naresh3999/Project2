/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {RevealFromBottomAndroid} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const Datamatics = () => {
  return (
    <View style={styles.cotainer}>
      <View style={{height: '98%'}}>
        <Image
          source={require('./images/naveen2.jpg')}
          style={{margin: 10, marginLeft: 20, height: '55%', width: '90%'}}
        />

        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 38, fontWeight: 'bold', color: 'black'}}>
            {' '}
            MOGILI
          </Text>
          <Text style={{fontSize: 36, marginBottom: 10, color: 'black'}}>
            {' '}
            NAVEEN
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={styles.textStyle}>Emp No:</Text>
          <Text style={styles.textStyle}>Exigency</Text>
          <Text style={styles.textStyle}>Blood Group</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>
            101114
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 35}}>
            9036325249
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 40}}>
            B+ Ve
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 25}}>
            DOB
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: '25%'}}>
            DOJ
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 25}}>
            16/07/1993
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 45}}>
            10/03/2022
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              marginTop: 20,
              color: '#cc3300',
            }}>
            DATAMATICS
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    //backgroundColor: 'skyblue',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    marginRight: 22,
    marginLeft: 22,
    color: 'black',
  },
});

export default Datamatics;
