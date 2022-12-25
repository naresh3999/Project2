import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import CustomStyles from '../Utils/CustomStyles';
import Colors from '../Utils/Colors';
import {useNavigation} from '@react-navigation/native';

export default function Ui() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titletext}>Design Screen</Text>
      <View style={styles.btnRootContaner}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('DemoUI');
            }}>
            <Text style={CustomStyles.buttonText}> Demo UI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('ManageUPI');
            }}>
            <Text style={CustomStyles.buttonText}> ManageUPI</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Pending');
            }}>
            <Text style={CustomStyles.buttonText}> Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Failed');
            }}>
            <Text style={CustomStyles.buttonText}> Failed</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('TranSuccess');
            }}>
            <Text style={CustomStyles.buttonText}> Success</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('ManageUpiList');
            }}>
            <Text style={CustomStyles.buttonText}> Manage UPIs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('UpiHome');
            }}>
            <Text style={CustomStyles.buttonText}> UPI Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Grid');
            }}>
            <Text style={CustomStyles.buttonText}> Grid View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('MapsHome');
            }}>
            <Text style={CustomStyles.buttonText}> Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Datamatics');
            }}>
            <Text style={CustomStyles.buttonText}> Datamatics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnRootContaner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    borderWidth: 2,
    height: '60%',
    width: '95%',
  },
  titletext: {
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 100,
  },
});
