import React from "react";
import { View , Text } from "react-native"
import { TextInput ,Button } from 'react-native-paper';
import { StyleSheet } from "react-native";
import utils from "../utils";
import axios from "axios"; 
const AddTodo=()=>{
   const [fd, setFd] = React.useState({
       title:{ name:"title", error:false , value:""  } ,   
       discription:{ name:"discription", error:false , value:""  }  
     });
    



     const addTodo = async ()=>{

   try{
      let res =await axios.post(`${utils.base_url}/todo/add-todo-list` ,{
         title : fd.title.value  , discription:fd.discription.value
              })
               
               let { result } =  res.data

                 console.log(result);
            
               //   dispatch({
               //    type:constant.MY_TODO,
               //    payload:{
               //      list:result
               //    }
               //   })

   }catch(err){
       console.log(err)
   }
     
   
    }
      

    return (
        <View style={styles.form_box}> 
        <TextInput
        mode="outlined"
        style={styles.input_box}
        label={"Title"}
        value={fd.title.value} 
      onChangeText={text => setFd({...fd, [fd.title.name]:{...fd.title ,value:text  } } ) }
    />
    

    <TextInput
    mode="outlined"
    multiline
      label={"discription"}
      value={fd.discription.value}
      onContentSizeChange={(event) => {
		// setHeight(event.nativeEvent.contentSize.height)
	}}
	style={{
      margin:10,
      height:100 // <- set the max height here
	}} 

      onChangeText={ text => setFd({...fd, [fd.discription.name]:{...fd.discription ,value:text  } } )}
    />

    <Button icon="camera" mode="contained" onPress={addTodo}>
     Add Todo
    </Button>

        </View>
     ) 
}


const styles = StyleSheet.create({
   form_box:{
       width:400 ,
       flex:1,
       justifyContent:"center",
       alignContent:'center'
      },
      input_box:{
          margin:10
      }
  })
  





export default AddTodo