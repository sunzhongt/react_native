/** 
 * search 搜索页
 *
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,FlatList} from 'react-native';
import { SearchBar,ListItem  } from 'react-native-elements';
export default class Search extends Component<Props> {
    constructor(){
      super();
      this.state={
        search: '',
        list:[
          {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
          },
          {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          }, 
        ]
      }
    } 
    static navigationOptions = {
        title: '搜索',
      };
      updateSearch = search => {
        this.setState({ search });
      };
      keyExtractor = (item, index) => index.toString();
      renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{ source: { uri: item.avatar_url } }}
        />
      )
  render() {
    return (
      <View>
        <SearchBar
        placeholder="搜索..."
        lightTheme={true}
        round={true}
        onChangeText={this.updateSearch}
        value={this.state.search}
      /> 
      <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.list}
      renderItem={this.renderItem}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});