/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Failed() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconView}>
        <TouchableOpacity>
          <Icon name="share-social-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.circleView} />
      <Text style={styles.textView}>Transfer failed for ₹2,000</Text>

      <Text
        style={[
          styles.textView,
          {fontSize: 15, textAlign: 'center', marginTop: 30},
        ]}>
        View transaction details
      </Text>
      <TouchableOpacity style={styles.retryView}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.tomato,
    alignItems: 'center',
  },
  circleView: {
    height: 180,
    width: 180,
    borderRadius: 100,
    backgroundColor: '#ff6347',
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
  retryView: {
    marginTop: 250,
    height: 50,
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  retryText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
