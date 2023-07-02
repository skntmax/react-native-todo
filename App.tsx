/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Icon from 'react-native-vector-icons/FontAwesome5';


import React ,{useState} from 'react';
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
import AddTodo from './component2/AddTodo';
import { useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage"
import utils from './utils'
import { useSelector, useDispatch } from "react-redux"
import constants from "./Redux/constants"

const Tab = createBottomTabNavigator();
function App() {
  
  return ( 
    <NavigationContainer>
    <Tab.Navigator> 

       <Tab.Screen name="Home"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color="#A020F0" />
          ),
        }}

        component={HomeScreen}
        
        />
        <Tab.Screen name="add-todo"
         options={{
            title:"ADD TODO",
            tabBarIcon: ({ color, size }) => (
              <Icon name="edit" size={size} color="#A020F0" />
            ),
          }}

        component={AddTodo} />

     </Tab.Navigator>
    </NavigationContainer>

     );
}



function HomeScreen({navigation , route}:any) {

  let dispatch = useDispatch()
  
   let list  = useSelector((ele:any)=> ele.mytodo.list ) 
   
  useEffect( ()=>{
    
    // if(route?.params?.sentFrom=='addtodo'){
    //   setSentFrom(!sentFrom)
    // }

    (async function(){
      let res =await axios.get(`${utils.base_url}/todo/todo-list`)
             let { result } =  res.data
              dispatch({
                type:constants.MY_TODO,
                payload:{
                   list:result
                }
               })
        }) ()

  } , [])
    

  return (
    <View>
   <Heading />
   <Box list={list} />
     </View>

  );
}

const Heading =()=>{
   return (
    <View style={styles.header}>
    <Text>  You todo list </Text>

    </View>
   )
}


const styles = StyleSheet.create({
  header:{
     
       height:50,
       backgroundColor:"#A020F0",
       color:"#FFFFFF",
       justifyContent:"center",
       alignItems:"center",
       textAlign:"center",
       fontSize:400
      }
  })
  



export default App;
