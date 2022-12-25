import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const FetchStudent = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10', // to set limit for 10 record "?_limit=10"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // render the students cards
  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../Assets/twitter.png')}
            resizeMode="contain"
          />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.userId < 10 ? `#0${item.userId}` : `#{item.userId }`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.userId} </Text>
            <Text style={styles.myName}> email: {item.id} </Text>
            <Text style={styles.myName}> mobile: {item.title} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Students</Text>
      {isLoaded && <ActivityIndicator size="large" color="#00ff" />}
      {/* {loading && <Text style={styles.loading}>Loading...</Text>} */}
      <FlatList
        keyExtractor={item => item.id}
        data={myData}
        renderItem={showUserData}
        // horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    backgroundColor: '#ebedee',
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
    marginLeft: 50,
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: 10,
    fontFamily: 'JosefinSans_400Regular',
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'JosefinSans_400Regular',
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'JosefinSans_400Regular',
  },
  mainHeader: {
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'JosefinSans_400Regular',
    margin: 10,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#353535',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'JosefinSans_400Regular',
  },
});

export default FetchStudent;
