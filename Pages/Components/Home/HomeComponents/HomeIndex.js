/** 
 * HomeIndex 页面盒子
 *
 * 
 */

import React, {Component,Fragment} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import HomePagesBottomBar from '../HomeComponents/HomeBottomBarNavigation';   
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Header} from 'react-native-elements'; 

export default class HomeIndex extends Component<Props> {
  render() {
    
    return (
      <Fragment> 
         <Header
            containerStyle={styles.HeaderContainerStyle}
            leftComponent={<Ionicons name={'ios-menu'} onPress={() => {
              console.log('gogogo')
              this.props.navigation.openDrawer()
            }}   color={'#fff'} size={27}   />}
            centerComponent={
                   <View style={styles.headerTitle}>
                      <Ionicons name={'ios-egg'}  color={'#fff'} size={25}   />
                       <Text style={{
                         fontSize:20,
                         fontWeight:'bold',
                         color:'#fff',
                         paddingLeft:5
                       }}>滴水知恩</Text>
                   </View>}
            rightComponent={<Ionicons name={'ios-search'} color={'#fff'} size={27}   />}
        /> 
         <HomePagesBottomBar/>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  HeaderContainerStyle:{
    // height:46,
    // paddingTop:5,
    // padding:5, 
    
  },
  headerTitle:{ 
    flexDirection: 'row',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:'center',
  }
});