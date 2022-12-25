/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Utils/Colors';
import CustomStyles from '../../Utils/CustomStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function UpiHome() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.rootView}>
      <View style={styles.iconView}>
        <FontAwesome5 name="user" size={70} color="#000" />
      </View>

      <View style={styles.accountHolderView}>
        <Text style={styles.textStyle}>Name:</Text>
        <Text style={[styles.textStyle, {marginLeft: 15}]}>Naresh SS</Text>
      </View>
      <View style={styles.accountHolderView}>
        <Text style={styles.textStyle}>Ac No:</Text>
        <Text style={[styles.textStyle, {marginLeft: 15}]}>62118057942</Text>
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[CustomStyles.btn, {backgroundColor: 'blue', margin: 20}]}>
        <Text style={CustomStyles.btnText}>Manage UPI id's</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                navigation.navigate('ManageUpiList');
              }}>
              <Text style={styles.modalBtnText}>Mnagae UPI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                navigation.navigate('RequestUpi');
              }}>
              <Text style={styles.modalBtnText}>UPI Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 20,
  },
  textStyle: {fontSize: 22, fontWeight: 'bold'},
  accountHolderView: {
    flexDirection: 'row',
    marginTop: 20,
    //marginLeft: '10%',
  },
  modalView: {
    backgroundColor: Colors.pink,
    bottom: 2,
    position: 'absolute',
    height: '40%',
    width: '100%',
    borderRadius: 20,
  },
  modalButton: {
    height: 280,
    width: 180,
    backgroundColor: Colors.white2,
    borderRadius: 15,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.blue,
  },
  iconView: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
