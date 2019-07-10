import React,{Component} from 'react' 
import {createSwitchNavigator,createAppContainer} from  'react-navigation';

import Login from './Login';
const AppRouter = createSwitchNavigator({
    Login:{
        screen:Login
    }
})

export default createAppContainer(AppRouter);