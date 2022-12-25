import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Splash from '../Screens/Splash';
import Settings from '../Screens/Settings';
import Interview from '../Screens/Interview';
import Ui from '../Screens/Ui';
import Redux from '../Screens/Redux';
import Firebase from '../Screens/Firebase';
import API from '../Screens/API';
import CounterState from '../Screens/CounterState';
import Redux2 from '../Screens/Redux2';
import ReduxDisplay from '../Screens/ReduxDisplay';
import FetchEg from '../Screens/FetchEg';
import FetchGet from '../Screens/FetchGet';
import FetchStudent from '../Screens/FetchStudent';
import DemoUI from '../Screens/DemoUI';
import ManageUPI from '../Screens/UiScreens/ManageUPI';
import Pending from '../Screens/UiScreens/Pending';
import Failed from '../Screens/UiScreens/Failed';
import TranSuccess from '../Screens/UiScreens/TranSuccess';
import ManageUpiList from '../Screens/UiScreens/ManageUpiList';
import UpiHome from '../Screens/UiScreens/UpiHome';
import TopTabView from './TopTabView';
import RequestUpi from '../Screens/UiScreens/RequestUpi';
import Grid from '../Screens/UiScreens/Grid';
import FirebaseStudents from '../Screens/FirebaseStudents';
import MapsHome from '../Screens/Maps/MapsHome';
import Datamatics from '../Screens/UiScreens/Datamatics';
import FoodAppRoute from '../FoodAppRoute';
import FoodDetails from '../components/FoodDetails';
import FoodHome from '../components/FoodHome';
import ResponsiveScreen from '../Screens/ResponsiveScreen';
import ResponsiveDimensions from '../Screens/ResponsiveDimensions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RouteNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  });

  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
      {showSplash ? (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      ) : null}

      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="CounterState" component={CounterState} />
      <Stack.Screen name="ReduxDisplay" component={ReduxDisplay} />
      <Stack.Screen name="Redux2" component={Redux2} />
      <Stack.Screen name="FetchEg" component={FetchEg} />
      <Stack.Screen name="FetchGet" component={FetchGet} />
      <Stack.Screen name="FetchStudent" component={FetchStudent} />
      <Stack.Screen name="DemoUI" component={TopTabView} />
      <Stack.Screen name="ManageUPI" component={ManageUPI} />
      <Stack.Screen name="Pending" component={Pending} />
      <Stack.Screen name="Failed" component={Failed} />
      <Stack.Screen name="TranSuccess" component={TranSuccess} />
      <Stack.Screen name="ManageUpiList" component={ManageUpiList} />
      <Stack.Screen name="UpiHome" component={UpiHome} />
      <Stack.Screen name="RequestUpi" component={RequestUpi} />
      <Stack.Screen name="Grid" component={Grid} />
      <Stack.Screen name="FirebaseStudents" component={FirebaseStudents} />
      <Stack.Screen name="MapsHome" component={MapsHome} />
      <Stack.Screen name="Datamatics" component={Datamatics} />
      <Stack.Screen name="FoodAppRoute" component={FoodAppRoute} />
      <Stack.Screen name="FoodHome" component={FoodHome} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
      <Stack.Screen name="ResponsiveScreen" component={ResponsiveScreen} />
      <Stack.Screen name="RespDim" component={ResponsiveDimensions} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,

        tabBarInactiveBackgroundColor: '#fffff1',
      }}>
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <FontAwesome5 name={'home'} size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="UIdesign"
        component={Ui}
        options={{
          title: 'Ui Design',
          tabBarIcon: () => (
            <FontAwesome5 name={'palette'} size={30} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Firebase"
        component={Firebase}
        options={{
          title: 'Firebase',
          tabBarIcon: () => (
            <FontAwesome5 name={'database'} size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="API"
        component={API}
        options={{
          title: 'API',
          tabBarIcon: () => (
            <FontAwesome5 name={'server'} size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Redux"
        component={Redux}
        options={{
          title: 'Redux',

          tabBarIcon: () => (
            <FontAwesome5 name={'save'} size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Interview"
        component={Interview}
        options={{
          title: 'Interview',
          tabBarIcon: () => (
            <FontAwesome5 name={'laptop-code'} size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default RouteNavigation;
