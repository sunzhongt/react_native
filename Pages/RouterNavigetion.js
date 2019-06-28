import { createSwitchNavigator, createAppContainer } from "react-navigation";
import React  from 'react';
import Home from './Components/Home/home';
import Login from './Components/login/login';  

// 顶级路由 
const PagesNavigator = createSwitchNavigator(
    {
        Home: {
            title:'首页',
            screen: Home
        },
        Login:{
            title:'登录',
            screen: Login 
        },
       
    },
    {
      initialRouteName: 'Login',  
    }
  );

 



  
  
  export default createAppContainer(PagesNavigator);