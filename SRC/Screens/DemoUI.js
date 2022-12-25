import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function DemoUI() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  topContainer: {
    width: deviceWidth / 2,
    height: deviceHeight / 3,
    margin: 10,
    // justifyContent: 'center',
    backgroundColor: 'blue',
    //alignItems: 'center',
  },
});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {initialWindowMetrics} from 'react-native-safe-area-context';
// //import {} from 'react-native-safe-area-context';
// import EStyleSheet from 'react-native-extended-stylesheet';

// const height = initialWindowMetrics.frame.height;
// const width = initialWindowMetrics.frame.width;
// const hRem = height / 772;
// const wRem = width / 375;

// export default function DemoUI() {
//   return (
//     <View style={styles.rootView}>
//       {/* <View style={{flex: 1, backgroundColor: 'blue'}}>

//       </View> */}
//       <Text style={styles.textStyle}>Hellooo</Text>
//     </View>
//   );
// }

// const styles = EStyleSheet.create({
//   rootView: {
//     height: hRem - 20,
//     width: wRem - 30,
//     backgroundColor: 'red',
//   },
//   textStyle: {
//     fontSize: '30rem',
//     color: 'blue',
//   },
// });
