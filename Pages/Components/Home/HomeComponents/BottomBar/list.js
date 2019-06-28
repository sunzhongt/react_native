/** 
 * list 列表页
 *
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
  
export default class List extends Component<Props> {

    static navigationOptions = {
        title: '列表',
      };
  render() {
    return (
      <View>
        <Text >列表页</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});