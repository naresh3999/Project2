import {StyleSheet} from 'react-native';
import Colors from './Colors';

const CustomStyles = StyleSheet.create({
  button: {
    height: 50,
    width: 140,
    borderRadius: 10,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    height: 50,
    width: '45%',
    borderRadius: 10,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomStyles;

//export  {CustomStyles};
