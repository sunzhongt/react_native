/** 
 * Home 页面盒子
 *
 * 
 */

import React, {Component} from 'react'; 
import HomePagesBottomBar from './HomeComponents/HomeBottomBarNavigation';   
import HomeFromDrawerInfoNavigation from './HomeComponents/HomeFromDrawerInfoNavigation';
export default class Home extends Component<Props> {
  render() {
    
    return ( 
            <HomeFromDrawerInfoNavigation/>
     
    );
  }
}

 