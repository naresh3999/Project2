import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState}from 'react'
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const LoadFolders = () => {
    const navigation = useNavigation();
    const [number, setnumber] = useState(0)
    
        const onClickAdd =()=>{
            console.log('hello add')
            setnumber(number+5)
        }
        const onClickMinus =()=>{
            console.log('hello minus')
            setnumber(number-5)
        }

        const reduxtNumber = useSelector(
            (state) => state.allReducers.number,
          );

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Text>Reuslt{number}</Text>
    <Text>Redux{reduxtNumber}</Text>
    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.addBtn} onPress={()=>{onClickAdd()}}>
            <Text>Add</Text>
        </TouchableOpacity>
        <View style={{ width: 50 }}></View>
        <TouchableOpacity style={styles.minusBtn} onPress={()=>{onClickMinus()}}>
            <Text style={{ color: 'pink' }}>minus</Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.nextBtn} onPress={()=>{navigation.navigate('Preview')}}>
            <Text style={{ color: 'black' }}>Go to Next Screen</Text>
        </TouchableOpacity>
</View>
  )
}

export default LoadFolders


const styles = StyleSheet.create({
    addBtn: { height: 40, width: 60, backgroundColor: 'red', borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
    minusBtn: { height: 40, width: 60, backgroundColor: 'blue', borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
    nextBtn: { height: 40, width: 100, backgroundColor: 'yellow', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }
})