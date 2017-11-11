import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalVisible:true
    }

    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible){
      this.setState({
        modalVisible:visible
      });
    }

  render() {
    return (
      <View style={{marginTop: 32, marginLeft: 15}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          >
         <View style={{backgroundColor: "rgba(0,0,0,0.4)", flex: 1, justifyContent: "center", alignItems: "center"}}>
           <View style={{marginTop: 32, marginLeft: 15, backgroundColor: "lightblue", width: 260, borderRadius: 5, height: 260}}>
            <View>
              <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text>Close</Text>
            </TouchableHighlight>
            </View>
          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
         
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
