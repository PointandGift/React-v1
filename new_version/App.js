import React, { Component } from 'react';
import Root from './comp/Router';

class App extends Component {
	 constructor(props){
	   super(props)
	   this.state = {
		   test:'show msg'
  };
		
}
	
  render() {
    return <Root test={this.state.test}/>;
  }
}

export default App;