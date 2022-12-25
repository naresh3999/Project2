import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
//import Animated from 'react-native-reanimated';

//constants
import {images, theme} from '../../constants';
const {onboarding1, onboarding2, onboarding3} = images;

const {COLORS, FONTS, SIZES} = theme;

const onBoardingsData = [
  {
    title: 'Lets travelling',
    description: 'asdfghjk zxcvbnm qwerty',
    img: onboarding1,
  },
];

const OnBoarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: COLORS.blue}}>NAresh</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyCOntent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
export default OnBoarding;
