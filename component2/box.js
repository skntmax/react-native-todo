import { View , StyleSheet ,FlatList ,RefreshControl} from "react-native"
import MyModal from "./Modal"
import Lists from "./Lists"
import { useEffect, useState } from "react"
import axios from "axios"
import { ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import utils from '../utils'
import { useSelector, useDispatch } from "react-redux"
import constants from "../Redux/constants"
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Text } from 'react-native-paper';


 export default  Box=({list})=>{
   
          let dispatch = useDispatch()
        const [updatedList, setUpdatedList ] = useState({
         status:false ,
         data: useSelector((ele)=> ele.mytodo.list )
        })

     return ( 
        <View style={styles.todo_box} >  

         { 
             <FlatList 
              data={list }
              keyExtractor={(item, index)=> index.toString() }
              renderItem ={(ele, index)=> <Lists  key={index}  index={index} item={ele} />}
              refreshControl={
                  <RefreshControl 
                   refreshing={ false }
                   onRefresh={()=>  {
                    
                (async function(){
                let res = await axios.get(`${utils.base_url}/todo/todo-list`)
                let { result } =  res.data
                        dispatch({
                        type:constants.MY_TODO,
                        payload:{
                            list:result
                        }
                        })

                         list=result
                        // setUpdatedList({
                        //     ...updatedList , status:true  , data:result
                        // })

                }) ()


                     }}
                  />

              }
            />
         }
     
        {/* list && list.map((ele, index)=>{
            return<Lists  key={index}  index={index} item={ele} />
        }) 
    */}


          
        
        </View>
    
    )

     
} 


const styles = StyleSheet.create({
    my_show_button:{
        
    },
    text_blank:{
textAlign:"center",
justifyContent:"center",
alignContent:'center'
    },
todo_box:{
     flex:1,
     justifyContent:"space-between",
     backgroundColor:"rgba() #FFFFFF"
     
}
})

