import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function FetchGet() {
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
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          {item.id}.{item.title}
        </Text>
        <Image
          source={{uri: item.image}}
          style={{height: 120, width: '60%', borderRadius: 10, margin: 10}}
          resizeMode="contain"
        />
        <Text>{item.description}</Text>
      </View>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{backgroundColor: '#fffffb'}}>
      <Text style={styles.title}> Coffee Shop</Text>
      {loading && <ActivityIndicator size="large" color="#00ff" />}
      {/* {loading && <Text style={styles.loading}>Loading...</Text>} */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: 'brown',
  },
  flatListView: {alignItems: 'center', padding: 10},
  loading: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'blue',
  },
});
