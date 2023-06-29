import * as React from 'react';
import { Modal, Portal, Button, Text , PaperProvider } from 'react-native-paper';
import { StyleSheet, View    } from 'react-native';
const MyComponent =  (props) => {
    const {title , discription}  = props.item
     
     const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View  style={styles.todo_box}>  
    <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
    
    <Text>
    title : {title}</Text>
    
    <Text>
    description : {discription}</Text>

    </Modal>
    </Portal>
    

        <Button  onPress={showModal}>
        Show
        </Button>
    
 
    </View>
  );
};
 


const styles = StyleSheet.create({
    my_show_button:{
        
         //  flex:1 ,
        //  justifyContent:'space-between'

    },
todo_box:{
     width:20,
     
}
})

export default MyComponent;