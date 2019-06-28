/** 
 * login 用户登录
 *
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input ,Button,ThemeProvider} from 'react-native-elements';
export default class Login extends Component<Props> {
  constructor(){
    super();
    this.state= {
      loading:false,
      userInfo:{
        name:'',
        password:''
      }
    }
  }

  render() {
    const theme = {
      Button: {
        titleStyle: {
          color:'#999'
        },
      },
    };
    return (
      <View style={styles.Login}>
        <Image source={require('../../../resource/images/bc.png')} style={styles.backgroundImage} />
         <View style={styles.content}>
                  {/* logo */}
                  <View style={styles.logo}>
                       <Image style={styles.logoImg} source={require('../../../resource/images/logo2.png')}/>
                  </View> 
                  {/* 用户登录框 */}
                  <View style={styles.LoginMain}>
                   <View  style={styles.loginBox}>
                          {/* 信息输入 */}
                          <View >
                              <Input  onChangeText={(text) => this.setState({text})} inputStyle={styles.userName} placeholder="用户名"  leftIcon={<Ionicons  name="ios-person" size={24} color='#ccc'/>  }   />
                          </View>
                          <View style={styles.marginTop}>
                              <Input inputStyle={styles.pws} autoComplete="off" password={true}   shake={true}  placeholder="密码" leftIcon={ <Ionicons  name="ios-lock"  size={24} color='#ccc' /> }  />
                          </View>
                          {/* 登录按钮 */}
                          <View   style={styles.BtnMarginTop}> 
                            <Button
                              title="用户登录"
                               
                              loading={this.state.loading}
                              onPress={() => this.props.navigation.navigate('Home')} 
                              
                            />
                            <ThemeProvider theme={theme}>
                                <Button
                                  title="注册"
                                  buttonStyle={{
                                    marginTop:30,
                                    backgroundColor:'#fff',
                                    
                                  }}  
                                  onPress={() => this.props.navigation.navigate('Home')} 
                                   
                                />
                            </ThemeProvider>
                            
                          </View>
                        
                    </View> 
                     
                   </View> 
                  

                  <View style={styles.LoginType}>
                     <Text style={styles.LoginTypeText}>
                     ——————— 选择登录方式 ——————— 
                     </Text>
                  </View>
                  {/* 第三方 微信 QQ 微博 登录*/}
                  <View style={styles.loginQQWXWB_Main}>
                       <View style={styles.WX_Box}>
                         <View style={styles.iconMain}>
                           <Image style={styles.WX} source={require('../../../resource/images/wx.png')}/>
                           <Text>微信登录</Text>
                         </View>  
                       </View>
                       <View style={styles.QQ_Box}> 
                          <Image style={styles.QQ} source={require('../../../resource/images/QQ.png')}/>
                          <Text>QQ登录</Text>
                       </View>
                       <View style={styles.SINA_Box}>
                       <View style={styles.iconMain}>
                          <Image style={styles.SINA} source={require('../../../resource/images/sina.png')}/>
                          <Text>微博登录</Text>
                       </View>
                          
                       </View>
                  </View>
         </View>
          
            
         
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // ------------------ 辅助 -------------
   marginTop:{ 
    marginTop:24
  },
   BtnMarginTop:{ 
    marginTop:46
  },
  //------------------- 最外盒子 -------------------- 
  Login:{
    position: 'relative', 
  },
  //------------------- 除背景外的大盒子 -------------------
  content:{
    position: 'absolute',
    width:'100%',
    height:'100%',
   
  },
  // ------------------- 大盒子里的logo -------------------
  logo:{ 
    height:'33%',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:'center',  
    paddingTop:'40%'
  },
  logoImg:{
    width:320,
    height:90,  
    backgroundColor:'rgba(0,0,0,0)', 
  },

  //------------------- 用户登录框 -------------------
 
  loginBox:{
   width:400
  }, 
  LoginMain:{  
    height:'43%',   
    paddingLeft:"10%",
    paddingRight:"10%",  
    // backgroundColor:'orange'
  }, 
  userName:{
    height:50, 
    fontSize:18,
    color:'#666' 
  },
  pws:{
    height:50, 
    fontSize:18,  
    color:'#666' 
  },
  // ------------------ 登录方式 -------------------
  LoginType:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'flex-end',
    textAlignVertical:'center', 
  },
  LoginTypeText:{
    color:'red'
  },

  //------------------- 第三方登录 -------------------
  loginQQWXWB_Main:{
    height:'23%',  
    flexDirection: 'row',
    width:'100%'
  },
  WX_Box:{ 
    flex: 1,
    paddingTop:'20%',
    height: 50,
    textAlign:'center',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    textAlignVertical:'center', 
    // backgroundColor: 'pink'
  },
  WX:{
    width:44,
    height: 44,
  },
  QQ_Box:{ 
    flex: 1,
    height: 50,
    paddingTop:'20%',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'flex-end',
    textAlignVertical:'center', 
    // backgroundColor: 'orange'
  },
  QQ:{
    width:44,
    height: 44,
  },
  SINA_Box:{ 
    flex: 1,
    height: 50,
    paddingTop:'20%',
    textAlign:'center',
    alignItems:'flex-start',
    justifyContent:'flex-end',
    textAlignVertical:'center', 
    // backgroundColor: 'lightblue'
  }, 
  SINA:{
    width:44,
    height: 44,
  },
  iconMain:{
    
    textAlign:'center',
    alignItems:'center',
    justifyContent:'flex-end',
    textAlignVertical:'center',
  },
  //------------------- 底部背景  -------------------
  backgroundImage:{ 
    width:'100%',
    height:'100%', 
    backgroundColor:'rgba(0,0,0,0)',
  }
});