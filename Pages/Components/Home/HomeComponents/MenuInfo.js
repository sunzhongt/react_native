/** 
 * MenuInfo 抽屉 页
 *
 * 
 */
import { DrawerItems, SafeAreaView } from 'react-navigation';
import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
export default class MenuInfo extends Component<Props> {
    
 
  render() {
    return (
      <View>
          <Ionicons name={'ios-menu'} onPress={() => {
              console.log('gogogo')
              this.props.navigation.openDrawer()
            }}   color={'#fff'} size={27}   />
         <Text>sss</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
});