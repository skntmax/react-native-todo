import * as React from 'react';
import { Button, List, MD3Colors } from 'react-native-paper';
import EditModal from './Modal'
import { Alert, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios';
import utils from '../utils'
import { useDispatch } from 'react-redux';
import constant from '../Redux/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const removeTodo = (id , dispatch )=>{


        try {
             
    
          (async function(){
            console.log(id);
       
              let res =await axios.post(`${utils.base_url}/todo/remove-todo-list` ,{
                _id:id
              })
                
               let { result } =  res.data
                 console.log(result);            
                 dispatch({
                  type:constant.MY_TODO,
                  payload:{
                    list:result
                  }
                 })

                 // Alert(message)
                 
          })()

        } catch (e) {
          // saving error
          console.log(e);
        }
      
   
}


const Lists = (props) =>{

    const { item:{  title , discription , _id} }  = props.item
    const { index} = props 
    let dispath = useDispatch()

 
  return (<List.Section>
   <List.Item title={()=>{
  return (
     <View style={styles.my_list}>
     <Avatar.Text size={24} label={eval(props.item.index+1) } /> 
      <Text style={{color:"black"}} >{title} </Text>
     </View>
  )    
   } } right={() =><ConfigComponent item={props.item} onDeleted={()=> console.log("delted")}  dispath={dispath} index={props.item.item._id}  /> } />
   
   </List.Section>
    )}
    



const ConfigComponent = (props)=>{

    return (
         <View style={styles.config} >
   
            <Button onPress={()=> removeTodo(props.index , props.dispath ) }> 
            <MaterialCommunityIcons onPress={()=> removeTodo(props.index , props.dispath , ) }   name="delete" color={'#e91e63'} size={15} > 
            delete
            </MaterialCommunityIcons>
            </Button> 
          <EditModal item={props.item} style={{paddingRight:50}} />
         </View>
    )
     
}



const styles = StyleSheet.create({
config:{
     flex:1,
     flexDirection:"row"
    },
    my_list:{
        flex:1,
     flexDirection:"row" ,
    //  justifyContent:"center",
     alignItems:"center",
     justifyContent:"space-between"
    }
})


export default Lists;