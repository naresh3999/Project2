import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import CustomStyles from '../Utils/CustomStyles';
import Colors from '../Utils/Colors';
import {useNavigation} from '@react-navigation/native';

export default function Firebase() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titletext}>Firebase Screen</Text>
      <View style={styles.btnRootContaner}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('FirebaseStudents');
            }}>
            <Text style={CustomStyles.buttonText}> Student Data</Text>
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
