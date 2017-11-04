
import React from 'react';

import { StackNavigator } from 'react-navigation';
import ShopList from "./comp/ShopList";
import ShopDetail from "./comp/ShopDetail";
import Scanner from "./comp/Scanner";
import Shop from './App';

export const navigation = StackNavigator({
          ShopDetail: { 
              screen: ShopDetail,
              navigationOptions:{
              title: "ShopDetail"
            }
          },
          
           Scanner: { 
              screen:  Scanner,
            navigationOptions:{
            title: "Scanner"
            }
          },
         
 }) ;






