/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TranSuccess() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconView}>
        <TouchableOpacity>
          <Icon name="share-social-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.circleView} />
      <Text style={styles.textView}> ₹2,000</Text>
      <Text
        style={[
          styles.textView,
          {fontSize: 18, textAlign: 'center', marginTop: 10},
        ]}>
        Paid to Vikram Aditya
      </Text>

      <Text
        style={[
          styles.textView,
          {fontSize: 15, textAlign: 'center', marginTop: 30},
        ]}>
        View transaction details
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1F45FC',
    alignItems: 'center',
  },
  circleView: {
    height: 180,
    width: 180,
    borderRadius: 100,
    backgroundColor: '#306EFF',
    margin: 100,
  },
  iconView: {
    marginRight: -300,
    height: 40,
    marginTop: 20,
  },
  textView: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.white3,
    marginTop: -50,
  },
});
