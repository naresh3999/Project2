import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Grid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const data = await resp.json();
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatListView}>
        {/* <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          {item.id}.{item.title}
        </Text> */}
        <Image
          source={{uri: item.image}}
          style={styles.imagStyle}
          resizeMode="contain"
        />
        {/* <Text>{item.description}</Text> */}
      </View>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}> Coffee Shop</Text>
      {loading && <ActivityIndicator size="large" color="#00ff" />}
      {/* {loading && <Text style={styles.loading}>Loading...</Text>} */}
      <FlatList
        numColumns={3}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {backgroundColor: '#fffffa', flex: 1, margin: 10},
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: 'maroon',
  },
  flatListView: {alignItems: 'center', margin: 5, justifyContent: 'center'},
  loading: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'blue',
  },
  imagStyle: {height: 120, width: 110, borderRadius: 10},
});
