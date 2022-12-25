
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home'
import LoadFolders from '../LoadFolders'
import Preview from '../Preview'



const Stack = createNativeStackNavigator();

const navigationStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Home}
        //   options={options}
        />
         <Stack.Screen
          name={"LoadFolders"}
          component={LoadFolders}
        //   options={options}
        />
         <Stack.Screen
          name={"Preview"}
          component={Preview}
        //   options={options}
        />
        
      </Stack.Navigator>
    );
  };
  
  export default navigationStack;