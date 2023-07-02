import * as React from 'react';
import { Modal, Portal, Button, Text , PaperProvider } from 'react-native-paper';

import { StyleSheet, View    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const MyComponent =  (props) => {
    const {title , discription}  = props.item
     
     const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View  style={styles.todo_box}>  
    <Portal >
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
    
     <Text variant="headlineLarge" style={styles.title_heading}>{title}</Text>

     <Text  variant="titleLarge"  >  {discription}</Text>


    </Modal>
    </Portal>
    

        <Button  onPress={showModal}>
        <Icon onPress={showModal} name="list"  size={20} color="#A020F0" >  </Icon>      
        </Button>
    
 
    </View>
  );
};
 


const styles = StyleSheet.create({
    my_show_button:{

    },
todo_box:{
     width:20,
},
title_heading:{
  textTransform:"capitalize"
}
})

export default MyComponent;