import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import AddTodo from './AddTodo';


const CommonModal = () => {
    const [visible, setVisible] = React.useState(false);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
  
    return (
      <PaperProvider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
             <AddTodo />
            </Modal>
        </Portal>
        <Button  onPress={showModal}>
          Add Todo
        </Button>
      </PaperProvider>
    );
  };
  
  export default CommonModal;