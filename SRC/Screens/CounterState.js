import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const State = () => {
  const [counter, setCounter] = useState(20);

  return (
    <View style={styles.rootcontainer}>
      <Text style={{fontSize: 23, fontWeight: 'bold', margin: 30}}>
        Counter Screen Using STATE
      </Text>
      <Text
        style={{fontSize: 40, fontWeight: 'bold', margin: 30, color: 'purple'}}>
        {counter}
      </Text>

      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 10);
        }}>
        <View style={styles.buttonView}>
          <Text style={styles.textView}>+10</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setCounter(0);
        }}>
        <View style={styles.buttonView}>
          <Text style={styles.textView}>RESET</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (counter >= 10) setCounter(counter - 10);
        }}>
        <View style={styles.buttonView}>
          <Text style={styles.textView}>-10</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default State;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    //backgroundColor: 'skyblue',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  buttonView: {
    height: 80,
    width: 180,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
  },
  textView: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
