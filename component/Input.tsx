import React from "react";
import { Button } from 'react-native-paper';
import { TextInput } from "react-native-paper";
import { FlatList, View , Text } from "react-native";
import { List } from 'react-native-paper';





class Input extends React.Component {

    state = {
      text: '',
      list:[]
    };
  
    
    render(){
      return (
         <View>


        <TextInput
          label='Items'
          value={this.state.text}
          onChangeText={text => this.setState({ ...this.state ,text:text })}
          />

        <Button  onPress={() =>{
      if(this.state.text!="")this.setState({...this.state ,list:[...this.state.list , this.state.text ] , text:""} , )  
      }} >
    Save Item
  </Button>

 
  <FlatList
  data={this.state.list}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item, index}) =>  <List.Item title= {item}
  // description="random discription "
  right={item =>  <Button  mode="contained" onPress={() =>  {
     this.setState({...this.state , list:this.state.list.filter((ele,i)=>i!=index)})
  }  } >
  delete
</Button>}
/>

  

}
  />
  

          </View>
      );
    }
  }





  export default Input