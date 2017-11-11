import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

export default class Tabs extends React.Component {

    //Initialize State
    state = {
        activeTab: 0
    }
  render({ children }=this.props) {
    return (
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
            {children.map(({props: {title} }, index)=>
                <TouchableOpacity
                    style={[
                        styles.tabContainer,
                        index === this.state.activeTab ? styles.tabContainerActive:[]
                    ]}
                    //Change active tab
                    onPress={() => this.setState({ activeTab: index }) }
                    key={index}
                >
                    <Text style={styles.tabText}>{title}</Text>
                </TouchableOpacity>
            )}
            </View>
            <View style={styles.contentContainer}>
                {children[this.state.activeTab]}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1,                            // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row',               // Arrange tabs in a row
    paddingTop: 10,                     // Top padding
  },
  // Individual tab container
  tabContainer: {
    flex: 1,                            // Take up equal amount of space for each tab
    paddingVertical: 13,                // Vertical padding
    borderBottomWidth: 3,               // Add thick border at the bottom
    borderBottomColor: 'transparent',   // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    borderBottomColor: '#FFFFFF',       // White bottom border for active tabs
  },
  // Tab text
  tabText: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  // Content container
  contentContainer: {
    flex: 1                             // Take up all available space
  }
});
