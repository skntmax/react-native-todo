/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Button } from 'react-native-paper';
import Input from './component/Input';
import Task from './component/Background/Task';
import { SafeAreaView as SafeAreaViewComponent } from "react-native";
import { WebView } from 'react-native-webview';
import Box from './component2/box';
import { mdiPlusCircle } from '@mdi/js';
import { List, MD3Colors } from 'react-native-paper';
import CommonModal from './component2/CommonModal';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const Tab = createBottomTabNavigator();
function App() {
  

  return (  <HomeScreen />
    // <NavigationContainer>
    // <Tab.Navigator> 

      //  <Tab.Screen name="Home" component={HomeScreen} />
      //   <Tab.Screen name="Settings" component={SettingsScreen} />

    //  </Tab.Navigator>
    // </NavigationContainer>

     );
}



function HomeScreen() {
  return (
    <View>
   <Heading />
   <Box />

     <TouchableOpacity

    style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      position: 'absolute',
      bottom: 10,
      right: 10,
      height: 70,
      backgroundColor: '#fff',
      borderRadius: 100,
    }}
  >
 
   {/* <List.Icon color={MD3Colors.tertiary70} icon="plus" /> */}
 

   </TouchableOpacity>

     </View>

  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Heading =()=>{
   return (
   <View style={styles.header}>
   <Text> You todo list </Text>

    </View>
   )
}


const styles = StyleSheet.create({
  header:{
       height:50,
       backgroundColor:"orange",
       justifyContent:"center",
       alignItems:"center",
       textAlign:"center",
       fontSize:400
      }
  })
  



export default App;
