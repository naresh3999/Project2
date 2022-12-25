/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Pending() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconView}>
        <TouchableOpacity>
          <Icon name="share-social-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.circleView} />
      <Text style={styles.textView}>Transaction Pending</Text>
      <Text
        style={[
          styles.textView,
          {fontSize: 14, textAlign: 'center', marginTop: 15, margin: 10},
        ]}>
        Transaction is in progress. The amount will be refunded 3-5 business
        days if not credited to benificiry
      </Text>
      <Text
        style={[
          styles.textView,
          {fontSize: 15, textAlign: 'center', marginTop: 5},
        ]}>
        View transaction details
      </Text>
      <View style={{marginTop: 200}}>
        <FontAwesome5 name="spinner" size={50} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.yellowOrange,
    alignItems: 'center',
  },
  circleView: {
    height: 180,
    width: 180,
    borderRadius: 100,
    backgroundColor: '#ffb95c',
    margin: 100,
  },
  iconView: {
    marginRight: -300,
    height: 40,
    marginTop: 20,
  },
  textView: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white3,
    marginTop: -50,
  },
});
