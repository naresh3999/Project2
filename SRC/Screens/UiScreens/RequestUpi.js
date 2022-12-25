import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import CustomStyles from '../../Utils/CustomStyles';
import TopTabView from '../../Navigation/TopTabView';

export default function RequestUpi() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image
            source={require('./images/back.png')}
            style={styles.backButton}
          />
          <Text style={styles.header}>Request</Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={[CustomStyles.btn, {backgroundColor: 'blue'}]}>
            <Text style={CustomStyles.btnText}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[CustomStyles.btn, {backgroundColor: 'blue'}]}>
            <Text style={CustomStyles.btnText}>Pending</Text>
          </TouchableOpacity>
        </View> */}
        <TopTabView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {margin: 6, flex: 1},
  topView: {
    width: '95%',
    height: '7%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    color: 'black',
    marginLeft: '38%',
    fontSize: 17,
    fontWeight: 'bold',
  },
  backButton: {height: 20, width: 25},
});
