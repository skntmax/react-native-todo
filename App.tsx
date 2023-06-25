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
  useColorScheme,
  View,
} from 'react-native';

import { Button } from 'react-native-paper';
import Input from './component/Input';
import Task from './component/Background/Task';

const MyComponent = () => (
   <Button  onPress={() => console.log('Pressed')}>   Press me </Button>
);




function App() {
  
  return (<View>
          {/* <Input />
         <Task /> */}
     </View>
    
  );
}


export default App;
