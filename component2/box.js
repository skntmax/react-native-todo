import { View , Text, StyleSheet} from "react-native"
import MyModal from "./Modal"
import Lists from "./Lists"
import { useEffect, useState } from "react"
import axios from "axios"
import { ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import utils from '../utils'
import { useSelector, useDispatch } from "react-redux"
import constants from "../Redux/constants"
 export default  Box=()=>{

  let {list:todo_list} = useSelector((ele)=> ele.mytodo )
  let dispatch = useDispatch()
     
    useEffect( ()=>{
   
      (async function(){
        let res =await axios.get(`${utils.base_url}/todo/todo-list`)
               let { result } =  res.data
                 dispatch({
                  type:constants.MY_TODO,
                  payload:{
                     list:result
                  }
                 })
          })()

    } , [])
      
     return ( 
        <ScrollView>
        <View style={styles.todo_box} >  
        
        {todo_list!=undefined?todo_list.map((ele, index)=>{
            return<Lists  key={index}  index={index} item={ele} />
        }): "" }
        
        </View>
        </ScrollView>
    )

     
} 


const styles = StyleSheet.create({
    my_show_button:{
        
         //  flex:1 ,
        //  justifyContent:'space-between'

    },
todo_box:{
     flex:1,
     justifyContent:"space-between"
     
}
})

