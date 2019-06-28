import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation";
import { Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React  from 'react';
import MenuInfo from './MenuInfo'; 
import HomeIndex from './HomeIndex';  
import { ScrollView, StyleSheet, Text,View, Image } from 'react-native';
const CustomDrawerContentComponent = props => (
  <ScrollView>
      <View style={styles.userImg}>
          <Image
           style={ styles.titleBGI }
           source={{
                    uri:'https://github.com/LoveHannah/Random-img/blob/master/108.jpg?raw=true'
                } } 
          /> 
          <Avatar  
          rounded
          size={90}
          avatarStyle={styles.Avatar}
          source={
              {
                  uri:'http://b-ssl.duitang.com/uploads/item/201504/15/20150415H0046_Ban8u.thumb.700_0.jpeg'
              }
          }/> 
          <Text style={styles.titletext}>孙重涛</Text>
      </View>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      
           <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImg:{
      height:180,
      width:'100%',
      position: 'relative', 
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      textAlignVertical:'center',  
  },
  titleBGI:{
      position: 'absolute',
      width:'100%',
      height:'100%',
      backgroundColor:'#000'

  },
  Avatar:{
      borderStyle:'solid',
      borderRadius:90,
      borderWidth:3,
      borderColor:'#fff'
      
  },
  titletext:{
      marginTop:4,
      fontSize:18,
      color:'#fff',
  }
});



// 顶级路由 
const HomeFromDrawerInfoNavigation = createDrawerNavigator(
    {
        HomeIndex:{ 
            screen: HomeIndex,
            navigationOptions: { 
                drawerIcon: ({ tintColor }) => (
                  <Ionicons name="ios-home" size={26} style={{ color: "rgb(21, 155, 28)" }} />
                ),
                drawerLabel: "首页", 
                
            },
        },
        MenuInfo: {  
            screen: MenuInfo ,
            navigationOptions: { 
                drawerIcon: ({ tintColor }) => (
                  <Ionicons name="ios-contact" size={26} style={{ color: "rgb(230, 107, 6)" }} />
 
                ),
                drawerLabel: "用户", 
               
              },
        }, 
    },
    {
     initialRouteName: 'HomeIndex',   
    drawerLockMode: 'locked-open',
    drawerWidth: 220, //抽屉的宽度或返回的功能。
    itemStyle:{
        fontSize:20,
        fontWeight:400
    },
    drawerPosition: 'left', //选项是left或right。默认是left位置。
    useNativeAnimations: false, //启用原生动画。默认是true。
    drawerBackgroundColor: '#fff', //使用抽屉背景获取某种颜色。默认是white。
     
    contentComponent:CustomDrawerContentComponent,
    contentOptions: { 
        labelStyle:{
            fontSize:16,
            fontWeight:'400'
        },
        activeTintColor:  'rgb(230, 107, 6)', 
      }

    
       
    } 
    
  );



  
  
  export default createAppContainer(HomeFromDrawerInfoNavigation);