/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Utils/Colors';
import CustomStyles from '../Utils/CustomStyles';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabView() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Received" component={Received} />
      <TopTab.Screen name="Sent" component={Sent} />
    </TopTab.Navigator>
  );
}
const empData = [
  {
    empname: 'NARESH',
    id: 1234,
    job: 'SDE',
    uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
    myimages: './abcde.png',
  },
  {
    empname: 'ABHIRAM',
    id: 1425,
    job: 'TESTER',
    uri: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7',
    myimages: './abcde.png',
  },
  {
    empname: 'SIDDHARTH',
    id: 3334,
    job: 'ANALYST',
    uri: 'https://images.unsplash.com/photo-1627522460108-215683bdc9f6',
  },
  {
    empname: 'SWETHA',
    id: 1431,
    job: 'DE',
    uri: 'https://images.unsplash.com/photo-1587814213271-7a6625b76c33',
  },
  {
    empname: 'VIKRAM',
    id: 4523,
    job: 'SE',
    uri: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
  },
  {
    empname: 'ADITYA',
    id: 2223,
    job: 'HR',
    uri: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7',
  },
  {
    empname: 'ABHIMANYNU',
    id: 3333,
    job: 'SDE',
    uri: 'https://images.unsplash.com/photo-1627522460108-215683bdc9f6',
  },
];
const Received = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <FlatList
      data={empData}
      //keyExtractor={item => item.name}
      renderItem={({item}) => (
        <View style={styles.flatListView}>
          <FontAwesome5 name="user" size={30} color="#000" />
          <View style={{marginLeft: -15}}>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
              {item.empname}
            </Text>
            <Text style={[styles.textStyle, {fontSize: 12}]}>
              Ac no: 6211857942
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginLeft: 20,
            }}>
            <TouchableOpacity
              style={styles.flatlistButton}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.flatlistButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.flatlistButton, {backgroundColor: '#fff'}]}>
              <Text style={[styles.flatlistButtonText, {color: 'blue'}]}>
                Declare
              </Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={styles.modalView}>
              <View style={styles.CircleView} />
              <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>
                Paying Naresh for the first time?
              </Text>
              <Text style={{fontSize: 15}}>
                Make sure you are paying a known person
              </Text>

              <View
                style={{
                  //marginBottom: 20,
                  marginTop: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, {backgroundColor: 'blue'}]}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={[styles.modalBtnText, {color: '#fff'}]}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    />
  );
};
const Sent = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.powderblue}}>
      <Text>Sent Tab View</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  flatListView: {
    //backgroundColor: 'skyblue',
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  imgStyle: {
    height: 100,
    width: 80,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 30,
    color: '#000',
  },
  flatlistButton: {
    height: 40,
    width: '45%',
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 15,
  },
  flatlistButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  modalView: {
    backgroundColor: Colors.pink,
    bottom: 2,
    position: 'absolute',
    height: '40%',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalButton: {
    height: 50,
    width: 150,
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
  CircleView: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: Colors.white3,
    marginTop: 10,
  },
});
