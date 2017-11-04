import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class GMap extends React.Component {
     constructor(props){
         super(props);
         this.mapClick = this.mapClick.bind(this);
     }
    
    mapClick(evt){
        var samecorrd = false;
        
        for(var i in this.props.markersData){
            if(this.props.markersData[i].latitude == evt.nativeEvent.latitude && this.props.markersData[i].longitude == evt.nativeEvent.longitude){
                samecorrd = true;
            }
        }
        
        if(!samecorrd){
            this.props.pushMarkersData(evt.nativeEvent.coordinate);
        }

    }
    

    render() {
        var markers = this.props.markersData.map((obj, i)=>{
        return(
            <MapView.Marker key={i} coordinate={obj}>
                <MapView.Callout>
                    <Text>Root Cafe</Text>
                </MapView.Callout>
            </MapView.Marker>
        )
    })
        
        return (
          <View>
            <MapView
                onPress={this.mapClick}
                style={{
                    width:Dimensions.get('window').width,
                    height:Dimensions.get('window').height
                }}
                initialRegion={{
                    latitude:-123,
                    longitude: 49,
                    latitudeDelta: 30,
                    longitudeDelta: 60
                }}
            >
            {markers}
            </MapView>
          </View>
        );
    }
}