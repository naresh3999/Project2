import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState}from 'react'
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { 
    setIncrement, 
    setDecrement,
    setChangeName
} from '../src/actions/actions';
const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
const [number, setnumber] = useState(0)
const reduxtNumber = useSelector(
    (state) => state.allReducers.number,
  );

  const name = useSelector(
    (state) => state.allReducers.name,
  );

    const onClickAdd =()=>{
        setnumber(number + 5)
        dispatch(setIncrement( reduxtNumber + 2));
    }
    const onClickMinus =()=>{
        console.log('hello minus')
        setnumber(number - 5)
        dispatch(setDecrement(reduxtNumber - 2));
    }
const onClickChangeName =()=>{
    dispatch(setChangeName('NAVEEN'));
}
  
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text>Reuslt{number}</Text>
            <Text>Redux{reduxtNumber}</Text>
            <Text>Redux{name}</Text>
            

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.addBtn} onPress={()=>{onClickAdd()}}>
                    <Text>Add</Text>
                </TouchableOpacity>
                <View style={{ width: 50 }}></View>
                <TouchableOpacity style={styles.minusBtn} onPress={()=>{onClickMinus()}}>
                    <Text style={{ color: 'pink' }}>minus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.minusBtn} onPress={()=>{onClickChangeName()}}>
                    <Text style={{ color: 'pink' }}>CNAGE NAME</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextBtn} onPress={()=>{navigation.navigate('LoadFolders')}}>
                    <Text style={{ color: 'black' }}>Go to Next Screen</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    addBtn: { height: 40, width: 60, backgroundColor: 'red', borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
    minusBtn: { height: 40, width: 60, backgroundColor: 'blue', borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
    nextBtn: { height: 40, width: 100, backgroundColor: 'yellow', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }
})
