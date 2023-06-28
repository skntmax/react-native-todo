import { View , Text, StyleSheet} from "react-native"
import MyModal from "./Modal"
import Lists from "./Lists"
import { useEffect, useState } from "react"
import axios from "axios"
import { ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import prd_data from '../utils'
export default  Box=()=>{
  
     const [list , setList ] = useState( undefined )
     
     
     const setItem = async (value) => {
        try {
          await AsyncStorage.setItem('prds', JSON.stringify(prd_data));
        } catch (e) {
          // saving error
        }
      };

      const getItem = async () => {
        try {
          const value = await AsyncStorage.getItem('prds');
          if (value !== null) {
            // value previously stored
            return JSON.parse(value)   
        }
        } catch (e) {
          // error reading value
        }
      };


    useEffect( ()=>{
   
        //   (async function(){
        //       let res =await axios.get('https://fakestoreapi.com/products/')
        //        let json_res =  res.data
        //        setList(json_res)
        //   })()
           
     
              (async function(){
                await setItem()
                let json_res =await getItem()
                setList([json_res]);   
           })()
           
     


        
           
          
         
    } , [])
      
     return ( 
        <ScrollView>
        <View style={styles.todo_box} >  
        
        {list!=undefined? list.map((ele, index)=>{
            return  <Lists  key={index}  index={index} item={ele}/>
        }):""}
        
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

