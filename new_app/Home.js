import React, { Component } from 'react';
import Root from './comp/Router';

class App extends Component {
	 constructor(props){
	   super(props)
	   this.state = {
           cards:[],
           myReward:[],
		   shops:[
			   {
				  shopImg: "https://www.bargainmoose.ca/vfiles/6779-419ccfb96a822daefd251657f10c044a.png",
				  name:'Bel Cafe',
				  address:"3700 Willingdon Ave, Burnaby",
				  toggle:false,
				  shop1dot:[],
				  shop1done:[],
				  timeScanned:0,
				  butnum:2,
				  ind:0,
				  reward:"1 Free Coffee",
				  mapImg:"https://www.bargainmoose.ca/vfiles/6779-419ccfb96a822daefd251657f10c044a.png",
				 infoImg:"https://www.bargainmoose.ca/vfiles/6779-419ccfb96a822daefd251657f10c044a.png",
				  
			  },
			  {
				  shopImg: "http://shopboxingday.ca/wp-content/uploads/2012/12/aritzia-boxing-day.png",
				  name:'shop1',
				  address:"3700 Willingdon Ave, Burnaby",
				  toggle:false,
				  active:false,
				  shop1dot:[],
				  shop1done:[],
				  timeScanned:0,
				  butnum:4,
				  ind:1,
				  reward:"1 Free Coffee",
				  mapImg:"https://www.bargainmoose.ca/vfiles/6779-419ccfb96a822daefd251657f10c044a.png",
				 infoImg:"https://www.bargainmoose.ca/vfiles/6779-419ccfb96a822daefd251657f10c044a.png",
			  },
			 
		   ],
		   curShop:{},
		   curCard:{}
		   
		   
		 
        }
	   
	   	this.pushReward = this.pushReward.bind(this);
     	this.pushCards = this.pushCards.bind(this);
     	this.changeCurShop = this.changeCurShop.bind(this);
	 	this.handleScan= this.handleScan.bind(this);
		this.resetScan= this.resetScan.bind(this);
	   	this.changeToggle = this.changeToggle.bind(this);
		this.pushShop1done = this.pushShop1done.bind(this);  
     	this.pushShop1dot = this.pushShop1dot.bind(this);

		this.changeCurCard = this.changeCurCard.bind(this);
		 
		
		
 }
	
	changeCurShop(obj){
		this.setState({
			curShop:obj
		});
	}

	changeCurCard(obj){
		this.setState({
			curCard:obj
		})
	}
	

  	pushReward(data){
          var arr= this.state.myReward;
          arr.push(data);
          
          this.setState({
              myReward:arr
          });
       
      };
 
 	
pushCards(data){
    var cards = this.state.cards;
    cards.push(data);
    this.setState({
      cards:cards
    });
  }


	
resetScan(shop){
		
		var emptyDone=[];
		shop.shop1done = emptyDone;
	
		shop.timeScanned = 0;
		var shops = this.state.shops; 
		this.state.shops[shop.ind] = shop;
		this.setState({ 
			 curShop:shop,
		 	 shops:shops
		});
}

		
handleScan(shop) {
	var num = this.state.shops[shop.ind].timeScanned;
		num++;
	shop.timeScanned = num;
	this.state.shops[shop.ind] = shop;
	var shops = this.state.shops; 
    
	this.setState({ 
	    curShop:shop,
		shops:shops 
    }); 
  }

changeToggle(shop,bool){
	 shop.toggle = bool;
	 this.state.shops[shop.ind] = shop;
	 var shops = this.state.shops;
	 this.setState({
		 curShop:shop,
		 shops:shops
	 }) 
}
	  
pushShop1done(shop,newDone){
	var shop1done = this.state.shops[shop.ind].shop1done;
		shop1done.push(newDone);
		shop.shop1done = shop1done;
	this.state.shops[shop.ind]=shop;
	var shops = this.state.shops;
    this.setState({
        curShop:shop,
		shops:shops 
	});
}
	
pushShop1dot(shop,newDot){
	var shop1dot = this.state.shops[shop.ind].shop1dot;
		shop1dot.push(newDot);
		shop.shop1dot = shop1dot;

	
	this.state.shops[shop.ind]=shop;
	var shops = this.state.shops;
    this.setState({
        curShop:shop,
		shops:shops 
	});
}    


 

	
  render() {
	 
	 
	  
    return <Root 
                  myReward= {this.state.myReward}
                  pushStampCard ={this.pushStampCard} 
                  stampCard= {this.state.shops}
                  pushCards = {this.pushCards}
                  cards={this.state.cards}
                  pushReward={this.pushReward}
				  
				  onScan={this.handleScan}
                  pushShop1done={this.pushShop1done}
                  pushShop1dot={this.pushShop1dot}
				  resetScan={this.resetScan}
				 
    			  changeToggle={this.changeToggle}
				  changeCurShop = {this.changeCurShop}
				  curShop = {this.state.curShop}
				  shops={this.state.shops}

				  curCard={this.state.curCard}
				  changeCurCard={this.changeCurCard}
				 
    />;
  }
}

export default App;