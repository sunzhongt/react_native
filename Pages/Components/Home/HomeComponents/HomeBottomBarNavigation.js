import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React  from 'react';
import Index from './BottomBar/index';
import Search from './BottomBar/search';
import List from './BottomBar/list';
import Collection from './BottomBar/collection';  
// 顶级路由 
const HomeBottomBarNavigator = createBottomTabNavigator(
    {
        Index: {
             screen: Index,
             navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                 
                    return <Ionicons name={'ios-home'}  color={tintColor} size={25}   />;
                  }
            } 
        },
        List: {
            screen: List,
            navigationOptions: {
               tabBarIcon: ({ focused, horizontal, tintColor }) => {
                
                   return <Ionicons name={'ios-list'} color={tintColor} size={25}   />;
                 }
           } 
        },
        Search: {
             screen: Search,
             navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                 
                    return <Ionicons name={'ios-search'} color={tintColor} size={25}   />;
                  }
            } 
        }, 
        Collection: {
            screen: Collection,
            navigationOptions: {
               tabBarIcon: ({ focused, horizontal, tintColor }) => {
                
                   return <Ionicons name={'ios-heart'} color={tintColor} size={25}   />;
                 }
           } 
        },
      
        
    },
    {
      initialRouteName: 'Index',  
    }
  );



  
  
  export default createAppContainer(HomeBottomBarNavigator);