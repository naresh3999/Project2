import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../Utils/Colors';
import CustomStyles from '../Utils/CustomStyles';

const Redux2 = () => {
  const navigation = useNavigation();
  const [number, setnumber] = useState(0);

  const onClickAdd = () => {
    console.log('hello add');
    setnumber(number + 5);
  };
  const onClickMinus = () => {
    console.log('hello minus');
    setnumber(number - 5);
  };

  const reduxtNumber = useSelector(state => state.allReducers.number);

  return (
    <View style={styles.rootContainer}>
      <Text>RESULT(state) : {number}</Text>
      <Text>RESULT(redux) : {reduxtNumber}</Text>

      <View style={styles.innerView}>
        <TouchableOpacity
          style={[CustomStyles.button, {backgroundColor: 'green'}]}
          onPress={() => {
            onClickAdd();
          }}>
          <Text style={CustomStyles.buttonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[CustomStyles.button, {backgroundColor: 'red'}]}
          onPress={() => {
            onClickMinus();
          }}>
          <Text style={CustomStyles.buttonText}>Minus</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={CustomStyles.button}
        onPress={() => {
          navigation.navigate('ReduxDisplay');
        }}>
        <Text style={CustomStyles.buttonText}>Redux Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Redux2;

const styles = StyleSheet.create({
  rootContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  innerView: {flexDirection: 'row', marginTop: 30},
});
