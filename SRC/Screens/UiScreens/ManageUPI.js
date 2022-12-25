/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import CustomStyles from '../../Utils/CustomStyles';

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;
export default function ManageUPI() {
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

        <View style={styles.upiView}>
          <Image
            source={require('./images/qrcode.png')}
            style={{height: 180, width: 200, marginTop: '10%'}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row', marginTop: 40}}>
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

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              CustomStyles.btn,
              {
                backgroundColor: Colors.white,
                borderWidth: 2,
                borderColor: Colors.blue,
              },
            ]}>
            <Text style={[CustomStyles.btnText, {color: Colors.blue}]}>
              Download
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              CustomStyles.btn,
              {
                backgroundColor: Colors.blue,
                borderWidth: 2,
                borderColor: Colors.blue,
              },
            ]}>
            <Text style={[CustomStyles.btnText, {color: Colors.white}]}>
              Share UPI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    margin: 5,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  topView: {
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
    height: '55%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginTop: '15%',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '95%',
    height: '12%',
    bottom: -10,
  },
  separator: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'black',
    marginTop: '25%',
  },
  buttonsContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
    width: '95%',
  },
});
