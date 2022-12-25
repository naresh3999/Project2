/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Message from './Message';

export default function FetchEg() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //ActivityIndicator
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedId, setSelectedId] = useState(null); // for update/ delete the partucular id

  //GET METHOD
  const fetchMessages = async () => {
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(realData => setData(realData));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //POST METHOD
  const addMessage = async () => {
    // first we creating an object for what we are going to add to api
    const requestBody = {
      title: title,
      body: description,
    };
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody), // pass our object here to convert to JSON
      })
        .then(response => response.json())
        .then(realData => {
          if (realData) {
            requestBody.id = data.length + 1; // for this it will add the new data to existing data
            let existingMessages = [...data, requestBody]; //by giving ... that will take the existing data and also adding requestBody
            setData(existingMessages);
            console.log(existingMessages); // check the output in console

            setTitle(''); // by declared this set title field as empty after submitted the button
            setDescription(''); // by declared this set description field as empty after submitted the button
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  //PUT METHOD : it will replace an existing Resource entirely and we need for partial(particular field) update we can use PATCH
  const updateMessage = async () => {
    const requestBody = {
      title: title,
      body: description,
    };
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts' + selectedId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody),
      })
        .then(response => response.json())
        .then(realData => {
          if (realData) {
            let existingMessages = [...data];
            let index = existingMessages.findIndex(
              message => message.id === selectedId,
            );
            existingMessages[index] = {
              ...existingMessages[index],
              ...requestBody,
            };
            setData(existingMessages);
            console.log(existingMessages);

            setSelectedId(null); // field will be empty aftet press the update
            setTitle(''); // field will be empty aftet press the update
            setDescription(''); // field will be empty aftet press the update
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE METHOD
  const deleteMessage = async id => {
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts' + id, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(realData => {
          if (realData) {
            let existingMessages = [...data];
            let index = existingMessages.findIndex(
              message => message.id === id,
            );
            existingMessages.splice(index, 1);
            setData(existingMessages);
            console.log(existingMessages); // check the output in console
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const selectedMessage = requestBody => {
    setTitle(requestBody.title);
    setDescription(requestBody.description);
    setSelectedId(requestBody.id);
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerTitle}>
        <Text style={styles.titleText}>FetchOperations</Text>
      </View>
      <View style={styles.topView}>
        <TextInput
          style={styles.inputField}
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={selectedId === null ? addMessage : updateMessage}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {selectedId === null ? 'ADD' : 'UPDATE'}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 554,
          backgroundColor: 'powderblue',
          borderRadius: 10,
        }}>
        {isLoading && <ActivityIndicator size="large" color="#00ff" />}
        <FlatList
          // horizontal
          showsHorizontalScrollIndicator={false} // scrolling indication
          data={data}
          renderItem={({item}) => (
            <Message
              {...item}
              selectedMessage={selectedMessage}
              deleteMessage={deleteMessage}
            />
          )} //by using ... we can pass the data to other screen, ... are like props
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    //flex: 1,
    backgroundColor: '#fffff5',
    //height: 600,
  },
  headerTitle: {
    backgroundColor: 'black',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separator: {
    borderWidth: 0.2,
    borderColor: '#353535',
  },
  inputField: {
    height: 60,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  topView: {
    margin: 10,
    //backgroundColor: 'pink',
  },
  button: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: 'black',
    borderRadius: 15,
  },
});
