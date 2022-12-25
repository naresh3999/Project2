/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Utils/Colors';
import CustomStyles from '../../Utils/CustomStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;
export default function ManageUPI() {
  const [modalVisible, setModalVisible] = useState(false);
  const [upiInput, setUpiInput] = useState('');
  const onProceed = () => {
    if (upiInput === 'naresh96828@kotak') {
      setModalVisible(false);
    } else {
      alert('UPI details are invalid');
    }
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.topView}>
          <Image
            source={require('./images/back.png')}
            style={styles.backButton}
          />
          <Text style={styles.header}>Manage UPI</Text>
        </View>

        {/* UPI one */}

        <View style={styles.upiView}>
          <Image
            source={require('./images/qrcode.png')}
            style={{height: '30%', width: '40%', marginTop: '5%'}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Naresh.singamshetty9492296828@kotak
            </Text>
            <Image
              source={require('./images/copy.png')}
              style={{height: 15, width: 15}}
            />
          </View>
          <Text style={{fontWeight: 'bold', color: '#959595', fontSize: 14}}>
            A/c: 62118057942
          </Text>
          <View style={styles.separator} />
          <View style={styles.iconsView}>
            <TouchableOpacity>
              <Image
                source={require('./images/lock.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={require('./images/greentick.jpg')}
                style={{height: 20, width: 20}}
              />
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 3}}>
                Primary
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('./images/delete.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* UPI two */}

        <View style={styles.upiView}>
          <Image
            source={require('./images/qrcode.png')}
            style={{height: '30%', width: '40%', marginTop: '5%'}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              abhiRam9492296828@kotak
            </Text>
            <Image
              source={require('./images/copy.png')}
              style={{height: 15, width: 15}}
            />
          </View>
          <Text style={{fontWeight: 'bold', color: '#959595', fontSize: 14}}>
            A/c: 9492296828
          </Text>
          <View style={styles.separator} />
          <View style={styles.iconsView}>
            <TouchableOpacity>
              <Image
                source={require('./images/lock.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginLeft: 3,
                  color: Colors.blue,
                }}>
                Set as Primary UPI
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('./images/delete.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* UPI code 3 */}
        <View style={styles.upiView}>
          <Image
            source={require('./images/qrcode.png')}
            style={{height: '30%', width: '40%', marginTop: '5%'}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              VikramAditya@kotak
            </Text>
            <Image
              source={require('./images/copy.png')}
              style={{height: 15, width: 15}}
            />
          </View>
          <Text style={{fontWeight: 'bold', color: '#959595', fontSize: 14}}>
            A/c: 864310110007664
          </Text>
          <View style={styles.separator} />
          <View style={styles.iconsView}>
            <TouchableOpacity>
              <Image
                source={require('./images/lock.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginLeft: 3,
                  color: Colors.blue,
                }}>
                Set as Primary UPI
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./images/delete.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addUPIview}
          onPress={() => setModalVisible(true)}>
          <FontAwesome5 name="plus" size={25} color="blue" />
        </TouchableOpacity>
        <Text style={{color: Colors.blue, fontWeight: 'bold'}}>
          Add new UPI id
        </Text>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalView}>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', marginTop: 10}}>UPI ID</Text>
              <TextInput
                placeholder="naresh96828@kotak"
                maxLength={20}
                value={upiInput}
                onChangeText={text => setUpiInput(text)}
                style={{
                  height: 60,
                  width: '100%',
                }}
              />
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  onProceed();
                }}>
                <Text style={styles.modalBtnText}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'pink',
  },
  innerContainer: {
    backgroundColor: Colors.E9DCC9,
    margin: 5,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  topView: {
    // height: deviceHeight / 14,
    // width: deviceWidth - 20,
    width: '95%',
    height: '7%',

    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    color: 'black',
    marginLeft: '30%',
    fontSize: 17,
    fontWeight: 'bold',
  },
  backButton: {height: 20, width: 25},
  upiView: {
    width: '95%',
    height: '25%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '95%',
    height: '12%',
    bottom: -5,
  },
  separator: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'black',
    marginTop: '10%',
  },
  addUPIview: {
    height: '10%',
    width: '20%',
    backgroundColor: Colors.white5,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: Colors.powderblue,
    bottom: 2,
    position: 'absolute',
    height: '40%',
    width: '100%',
    borderRadius: 30,
  },
  modalButton: {
    height: 50,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: '10%',
  },
  modalBtnText: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
