import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SectionList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import Scanner from "./Point/App";

//list objects
const dataSource = [
  //Other section
  {
    data: [ 
      {img: "https://lh3.googleusercontent.com/P-D8MsIRPJI97iVTpCi9ox8C0_PinIAaaH_LryzobkutE4cnAj0TCtBnvX4Wp2so2OZL=s136", card: "Other Card"},  
      ], title: "Other"},
  
  //A section
  {
    data: [ 
      {img: "https://www.bargainmoose.ca/vfiles/6779-419ccfb96a822daefd251657f10c044a.png", card: "Addition Elle"}, 
      {img: "http://shopboxingday.ca/wp-content/uploads/2012/12/aritzia-boxing-day.png", card: "Aritzia"},
      {img: "http://www.cbj.ca/wp-content/uploads/2017/05/Aeroplan.jpg", card: "Aeroplan"}  
      ], title: "A"},

  //C section
  {
    data: [ 
      {img: "https://i.ytimg.com/vi/TjKUS7C3cYc/maxresdefault.jpg", card: "Canadian Tire"},
      {img: "https://static1.squarespace.com/static/56e902931bbee07f5c3d604b/56f05e5001dbae995567a57b/5969840603596e837b51b2b7/1504030314035/_LC+Costco+Logo+Enhancement+by+Graham+Hnedak+Brand+G+Creative+14+July+2017.jpg", card: "Costco"},
      {img: "http://shopboxingday.ca/wp-content/uploads/2012/12/cineplex-boxing-day.png", card: "Cineplex - SCENE"}
      ], title: "C"},
  
  //L section
  {
    data: [ 
      {img: "http://shopboxingday.ca/wp-content/uploads/2012/12/london-drugs-boxing-day.png", card: "London Drugs"}
      ], title: "L"},
  
  //S section
  {
    data: [ 
      {img: "http://www.stratospherehotel.com/var/ezwebin_site/storage/images/media/flyer-images/starbucks-logo-header/71193-1-eng-GB/Starbucks-Logo-Header.jpg", card: "Starbucks"}, 
      {img: "https://i0.wp.com/bayview-news.com/wp-content/uploads/2017/03/shoppers-drug-mart-logo.png?fit=1200%2C600", card: "Shoppers Drug Mart"} 
      ], title: "S"},
  
  //T section
  {
    data: [ 
      {img: "https://callahanpg.ca/wp-content/uploads/2016/08/Tims-logo-square.jpg", card: "Tim Hortons"},
      {img: "http://www.smcprint.ie/images/com_rsmonials/2.jpg", card: "Tommy Hilfiger"}
      ], title: "T"}
]

export default class CardList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: dataSource,
      scan: null,
      scan_data:null,
      home:"yes"
    }

    this.filter = this.filter.bind(this);
    this.scan = this.scan.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  scan(data){
    this.setState({
      scan: true,
      scan_data:data
    });
  }

  goHome(){
    this.setState({
      scan:false
    })
  }

  filter(text){
    var filter = this.state.data.filter((obj, i)=>{
      return (text[0].toLowerCase() == obj.title.toLowerCase());
    });

    this.setState({
      data: filter
    });
  }
  //rendering list items
  renderItem = (item) => { 
    return (
      <TouchableOpacity onPress={this.scan.bind(this, item.item)}>
        <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5}}>
          <View>
            <Image source={{uri: item.item.img}}
          style={styles.images} />
          </View>
          <View style={{borderBottomWidth: 0.5, borderBottomColor: "darkgrey", width: 260, height: 60}}>
            <Text style={{fontSize: 22, marginLeft: 10, paddingVertical: 10}}>{item.item.card}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  //list header for seperation in SectionList
  renderHeader = (headerItem) => { 
    return (
      <Text style={styles.head_h1}>{headerItem.section.title}</Text>
    ); 
  }
  
  render() {
	  
	  console.log(this.props.navigation + "Nav Props in Addcards")
	 
    var scanner_show = null;
    if (this.state.scan == true){
      scanner_show = <Scanner 
	  navigation={this.props.navigation}
	  cardPush={this.props.cardPush} mainData={this.state.scan_data} cards={this.props.cards} setModalVisible={this.props.setModalVisible}
    goHome={this.goHome} />
    } else {
      scanner_show = (
        <View style={{marginTop: 20}}>
          <View style={styles.head_div}>
            <TouchableOpacity onPress={() => {
                this.props.setModalVisible(false)
              }}>
              <Image source={{uri: "https://maxcdn.icons8.com/Share/icon/win8/Arrows//chevron_down1600.png"}} style={{backgroundColor: 'transparent', width: 30, height: 30}} />
            </TouchableOpacity>
            <TextInput onChangeText={this.filter} placeholder={"SEARCH"} style={{backgroundColor: '#e3e7ed', width: 315, height: 30, borderRadius: 7}} />
          </View>
          <SectionList 
            renderItem={this.renderItem}
            renderSectionHeader={this.renderHeader}
            sections={this.state.data}
            keyExtractor={(item) => item.card}
          />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {scanner_show}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  images: {
    width: 80,
    height: 50
  },
  head_h1: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 20,
    backgroundColor: "lightgrey",
    color: "grey"
  },
  head_div: {
    paddingHorizontal: 10,
    marginVertical: 6,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between'
  }
});
