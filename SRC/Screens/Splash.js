/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Colors from '../Utils/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Splash = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>PracticeApp</Text>
        <Image
          source={require('../Assets/LogoN.jpg')}
          style={{
            height: 250,
            width: 220,
            borderRadius: 10,
            margin: 20,
            borderWidth: 1,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyCOntent: 'center',
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    width: width - 50,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.greenn,
    fontSize: 30,
    fontWeight: 'bold',
    textStyle: 'center',
  },
});
export default Splash;

// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
// // import {initialWindowMetrics} from 'react-native-safe-area-context';

// // const height = initialWindowMetrics.frame.height;
// // const width = initialWindowMetrics.frame.width;
// // const hRem = height / 772;
// // const wRem = width / 375;

// const Splash = () => {
//   return (
//     <View style={styles.container}>
//       <Text>SPLASH SCREEN</Text>
//       <Image
//         source={require('../Assets/LogoN.jpg')}
//         style={{height: 150, width: 150}}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     // hRem: 20,
//     // wRem: 20,
//     width: '80%',
//     height: '60%',
//     marginHorizontal: '10%',
//     marginTop: '20%',
//     backgroundColor: '$bgColor',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 5,
//   },
// });
// export default Splash;
