import * as React from 'react';
import { Button, List, MD3Colors } from 'react-native-paper';
import EditModal from './Modal'
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { Avatar } from 'react-native-paper';


const Lists = (props) =>{
    const {title , description}  = props.item
     return (<List.Section>
   <List.Item title={()=>{
  return (
     <View style={styles.my_list}>
     <Avatar.Text size={24} label={eval(props.index+1)  } /> 
      <Text>{title} </Text>
     </View>
  )    
   } } right={() =><ConfigComponent item={props.item}  /> } />
   
   </List.Section>
    )}
    



const ConfigComponent = (props)=>{

    return (
         <View style={styles.config} >
           <Button  > Edit </Button> 
            <Button > delete </Button> 
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