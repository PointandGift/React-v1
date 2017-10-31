import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import GMap from "./comp/GMap";

export default class App extends React.Component {
	 constructor(props){
         super(props);
         
         this.state = {
             markersData:[]
         }
         
         this.pushMarkersData = this.pushMarkersData.bind(this);
     }
    
    pushMarkersData(data){
        var arr = this.state.markersData;
        arr.push(data);
        
        this.setState({
           markersData:arr 
        });
    }

  render() {
      
    return (
       <View>
        <GMap 
			markersData={this.state.markersData}
            pushMarkersData={this.pushMarkersData}
               
		/>
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
