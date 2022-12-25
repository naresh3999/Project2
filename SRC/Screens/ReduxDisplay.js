/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Utils/Colors';
import CustomStyles from '../Utils/CustomStyles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setIncrement, setDecrement} from '../Store/Actions/actions';
const ReduxDisplay = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [number, setnumber] = useState(0);
  const reduxtNumber = useSelector(state => state.allReducers.number);

  const onClickAdd = () => {
    setnumber(number + 5);
    dispatch(setIncrement(reduxtNumber + 2));
  };
  const onClickMinus = () => {
    //console.log('hello minus');
    setnumber(number - 5);
    dispatch(setDecrement(reduxtNumber - 2));
  };

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
          navigation.navigate('Redux2');
        }}>
        <Text style={CustomStyles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReduxDisplay;
const styles = StyleSheet.create({
  rootContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  innerView: {flexDirection: 'row', marginTop: 30},
});
