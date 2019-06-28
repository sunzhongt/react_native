/** 
 * collection 收藏页
 *
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
  
export default class Collection extends Component<Props> {

  static navigationOptions = {
    title: '收藏',
  };
  render() {
    return (
      <View>
        <Text >收藏页</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});