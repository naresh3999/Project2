import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function Message({
  userId,
  id,
  title,
  body,
  selectedMessage,
  deleteMessage,
}) {
  //have to declare because (userid, id, title, body) are from parent function
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>
        {id}.{title}
      </Text>
      <Text style={styles.bodyStyle}>{body}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => selectedMessage({id, title, description: body})}>
          <Image
            source={require('../Assets/edit.jpg')}
            style={{height: 40, width: 40, borderRadius: 10}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => deleteMessage(id)}>
          <Image
            source={require('../Assets/delete.jpg')}
            style={{height: 40, width: 40, borderRadius: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 5,
    margin: 5,
  },
  textStyle: {
    fontSize: 15,
    padding: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  bodyStyle: {
    fontSize: 15,
    padding: 15,
  },
  button: {
    height: 40,
    width: '30%',
    //backgroundColor: 'blue',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
