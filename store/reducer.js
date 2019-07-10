import {
  USER_LOGIN,
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  IMMEDIATELY_LOGIN,
  LOGIN_ERROR
} from './antionType';  

const defaultState = {
    userInfo:{
       userName:'',
       passWord:'', 
    },
    isLogin:false,
    Loginload:false    
}

export default (state=defaultState,action)=>{
    if(action.type==USER_LOGIN ){ // 用户登录
      const newState = JSON.parse(JSON.stringify(state)); 
      newState.isLogin=true;
      newState.Loginload=false; 
      return newState;
    }else if(action.type==USERNAME_CHANGE ){ // 输入账号
      const newState = JSON.parse(JSON.stringify(state));  
      newState.userInfo.userName=action.userName; 
      return newState;
    }else if(action.type==PASSWORD_CHANGE ){ // 输入密码
      const newState = JSON.parse(JSON.stringify(state)); 
      newState.userInfo.passWord=action.passWord; 
      return newState;
    }else if(action.type==LOGIN_ERROR ){ //登录失败
      const newState = JSON.parse(JSON.stringify(state)); 
      newState.Loginload=false; 
      return newState;
    }else if(action.type==IMMEDIATELY_LOGIN ){ //准备登录
      const newState = JSON.parse(JSON.stringify(state)); 
      newState.Loginload=true; 
      return newState;
    }
    return state;
}