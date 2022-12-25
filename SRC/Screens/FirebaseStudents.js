/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Image,
} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const FirebaseStudents = () => {
  const [rollnumber, setRollnumber] = useState('');
  const [studentname, setStudentname] = useState('');
  const [email, setEmail] = useState('');
  const [output, setOutput] = useState('');
  const navigation = useNavigation();
  const [isUpdate, setIsUpdate] = useState('');

  //ADD STUDENT
  const addStudent = async () => {
    try {
      await database().ref('/USERS/STUDENTS').push({
        rollnumber,
        studentname,
        email,
      });
    } catch (err) {
      console.log(err);
    }
    //after adding the data to database, the field should be empty
    setRollnumber('');
    setStudentname('');
    setEmail('');
  };

  //GET METHOD
  const getFirebaseData = async () => {
    await database()
      .ref('USERS/STUDENTS')
      .on('value', snapshot => {
        const studentData = snapshot.val();
        console.log('User data NARESH: ', studentData);

        //above code by adding Object.values(studentData) it wont display the unique key and stored data in an array
        setOutput(studentData);
      });
  };

  const updateStudent = async () => {
    try {
      await database()
        .ref(`/USERS/STUDENTS/${isUpdate}`)
        .update({
          rollnumber,
          studentname,
          email,
        })
        .then(() => alert('Data Updated'));
    } catch (err) {
      console.log(err);
    }
    //after adding the data to database, the field should be empty
    setRollnumber('');
    setStudentname('');
    setEmail('');
  };

  //UPDATE METHOD
  const updateStudentData = async (rollnumber, studentname, email, key) => {
    try {
      setRollnumber(rollnumber);
      setStudentname(studentname);
      setEmail(email);
      setIsUpdate(key);
    } catch (error) {
      console.log(error);
    }
  };

  // // DELETE METHOD
  // const removeData = async () => {
  //   try {
  //     await database().ref('/USERS/STUDENTS').remove();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getFirebaseData();
  }, []);

  //console.log('outside useeffect: ', output);
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, {color: 'black', margin: 20}]}>
        Student Registration
      </Text>
      <TextInput
        style={styles.inputField}
        placeholder="RollNo"
        keyboardType="number-pad"
        maxLength={5}
        value={rollnumber}
        onChangeText={text => setRollnumber(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="StudentName"
        value={studentname}
        onChangeText={text => setStudentname(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      {isUpdate.length > 0 ? (
        <Button
          title="UPDATE"
          onPress={() => updateStudentData(rollnumber, studentname, email)}
        />
      ) : (
        <Button title="REGISTER" onPress={() => addStudent()} />
      )}
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'tomato', marginTop: 10}]}
        onPress={() => alert('fuctionality not updated...')}>
        <Text style={styles.textStyle}>REMOVE ALL</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 25, color: 'orange'}}>Students List</Text>

      <FlatList
        style={{width: '95%'}}
        data={Object.values(output)}
        renderItem={({item}) => {
          return (
            <View>
              <View style={styles.flatlistView}>
                <Text style={styles.flatListText}>{item.rollnumber}</Text>
                <Text style={styles.flatListText}>{item.studentname}</Text>
                {/* <Text style={styles.flatListText}>{item.email}</Text> */}
                <TouchableOpacity
                  onPress={() => {
                    // updateStudentData();
                    //navigation.navigate('StudentUpdate');
                  }}>
                  <Image
                    style={[styles.img, {marginLeft: 80}]}
                    source={require('../Assets/edit.jpg')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.img}
                    source={require('../Assets/delete.jpg')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FirebaseStudents;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputField: {
    height: 60,
    width: '80%',
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  button: {
    height: 50,
    width: '70%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  flatlistView: {
    //backgroundColor: 'purple',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
  },
  flatListText: {
    fontSize: 15,
    color: 'purple',
    fontWeight: 'bold',
  },
  img: {
    height: 20,
    width: 20,
  },
});
