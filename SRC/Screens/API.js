import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import CustomStyles from '../Utils/CustomStyles';
import Colors from '../Utils/Colors';
import {useNavigation} from '@react-navigation/native';

export default function API() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titletext}>API Eg Screen</Text>
      <View style={styles.btnRootContaner}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('FetchGet');
            }}>
            <Text style={CustomStyles.buttonText}> Get API</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('FetchEg');
            }}>
            <Text style={CustomStyles.buttonText}>Fetch CRUD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('FetchStudent');
            }}>
            <Text style={CustomStyles.buttonText}> Fetch Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <Text style={CustomStyles.buttonText}> NextScreen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <Text style={CustomStyles.buttonText}> NextScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <Text style={CustomStyles.buttonText}> NextScreen</Text>
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
    height: 300,
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
