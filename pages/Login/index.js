/**
 *  登录 login 
 */

import React, { Component, Fragment } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
// import InputPassword from 'react-native-elements-input-password';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import Global from '../../Global/Global';
import { postBodyProps, httpFetch } from '../../Global/Api';

import { 
  userLoginAction,
  userNameChange,
  passWordChange, 
} from '../../store/antionCreators';
import store from './../../store/index';
import {connect} from 'react-redux';  

class Login extends Component<Props> {
  constructor() {
    super(); 
  };
  componentWillMount = () => {

  }
  render() {
    return (
      <ImageBackground
        style={styles.Login}
        source={require('../../resource/images/ComponentImg/Login/Login_bg.png')}>
        <View style={[styles.box, styles.logo]}>
          <Image
            source={require('../../resource/images/Logo/Logo.png')}
            style={[styles.logoImg]}
          />
        </View>
        <View style={[styles.box, styles.userInfo]}>
          {/* <Text style={[styles.LoginTitle]}> 账 号 密 码 登 录 </Text> */}

          <View style={styles.userForm}>
            <View style={[styles.inputBox, styles.inputBox_a]}>
              <Input placeholder='账号/手机号/邮箱' inputContainerStyle={styles.userInput} inputStyle={{ fontSize: 22 }}
                leftIcon={<AntIcon name='user' size={26} color='black' />}
                onChangeText={(userName)=>this.props.userNameInputChange(userName)}
                value={this.props.userInfo.userName}
              />
            </View>
            <View style={[, styles.inputBox, styles.inputBox_b]}>
              <Input placeholder='密码' inputContainerStyle={[styles.userInput]} inputStyle={{ fontSize: 22 }}
              secureTextEntry={true}
                leftIcon={<AntIcon name='unlock' size={26} color='black' />}
                onChangeText={(passWord)=>this.props.passwordInputChange(passWord)}
                value={this.props.userInfo.passWord}
              />
            </View>



          </View>
          <View style={styles.LoginButtonBox}>
            <Button title="登录"
              size={24}
              containerStyle={styles.LoginButtonContainerStyle}
              buttonStyle={styles.LoginButton}
              loading={this.props.Loginload}
              onPress={()=>this.props.userLogin()}
            />
          </View>
          <View style={styles.LoginHelp}>
            <Text style={[styles.LoginHelpfind, styles.LoginHelpfind_a]}>
              短信验证登录/注册
                    </Text>
            <Text style={[styles.LoginHelpfind, styles.LoginHelpfind_b]}>
              海外手机登录
                    </Text>
            <Text style={[styles.LoginHelpfind, styles.LoginHelpfind_c]}>
              找回密码
                    </Text>
          </View>

        </View>
        <View style={[styles.box]}>
          <View style={styles.LoginTypeTitle}>
            <Text style={styles.LoginTypeTitleText}>—————— 第三方登录 ——————</Text>
          </View>
          <View style={[styles.LoginType]}>
            <View style={styles.LoginTypeBox}>
              <View style={styles.LoginTypeMain}>
                <Image style={styles.iconImg} source={require('../../resource/images/ComponentImg/Login/loginType/wx.png')} />
                <Text style={styles.iconText}>微信登录</Text>
              </View>
            </View>
            <View style={styles.LoginTypeBox}>
              <View style={styles.LoginTypeMain}>
                <Image style={styles.iconImg} source={require('../../resource/images/ComponentImg/Login/loginType/QQ.png')} />
                <Text  style={styles.iconText}>QQ登录</Text>
              </View>
            </View>
            <View style={styles.LoginTypeBox}>
              <View style={styles.LoginTypeMain}>
                <Image style={styles.iconImg} source={require('../../resource/images/ComponentImg/Login/loginType/sina.png')} />
                <Text  style={styles.iconText}>微博登录</Text>
              </View>
            </View>
          </View>

        </View>
      </ImageBackground >
    );
  }
}

const mapstateToProps = (state) =>{
     return {
      userInfo:state.userInfo,
      isLogin:state.isLogin,
      Loginload:state.Loginload
     }
}

const mapDispatchToProps=(dispatch)=>{ 
   return {
        userNameInputChange(userName){
          const action = userNameChange(userName);
           store.dispatch(action); 
        },
        passwordInputChange(passWord){
          const action =  passWordChange(passWord);
          store.dispatch(action); 
        },
        userLogin(){  
         const action= userLoginAction()  
         store.dispatch(action); 
      //     fetch('http://94.191.84.187:4567/react_native_orange/login'+PostProps,{
      //       method: 'POST',
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //       }, 
      //     })
      //     .then((res) => res.json())
      //     .then((res) => { 
      //       console.log(res); 
      // })
      // .catch((error) =>{
      //   console.error(error);
      // });
      
           
        }
   }
}
export default connect(mapstateToProps,mapDispatchToProps)(Login);