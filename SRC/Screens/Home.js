import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import CustomStyles from '../Utils/CustomStyles';
import Colors from '../Utils/Colors';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titletext}>Home Screen</Text>
      <Image
        source={require('../Assets/twitter.png')}
        resizeMode="contain"
        style={styles.logoImg}
      />

      <View style={styles.btnRootContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('FoodHome');
            }}>
            <Text style={CustomStyles.buttonText}> FoodHome</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('ResponsiveScreen');
            }}>
            <Text style={CustomStyles.buttonText}> Dimensions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={CustomStyles.button}
            onPress={() => {
              navigation.navigate('RespDim');
            }}>
            <Text style={CustomStyles.buttonText}> Resp Dim</Text>
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
  logoImg: {
    height: 150,
    width: '90%',
    borderRadius: 10,
    margin: 20,
    borderWidth: 1,
  },
  btnRootContainer: {
    marginTop: 100,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    borderWidth: 2,
  },
  titletext: {
    color: Colors.redmix,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    //margin: 20,
    padding: 10,
  },
});
