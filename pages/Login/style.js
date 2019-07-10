import { StyleSheet } from 'react-native';
import Global from '../../Global/Global';

const styles = StyleSheet.create({
   Login:{
    width: '100%',
    height: '100%',
    backgroundColor:'#fff',
    flexDirection: 'column',
    textAlign:'center',
    // alignItems:'flex-end',
    alignItems:'center',
    // justifyContent:'flex-end',
    justifyContent:'center',
    textAlignVertical:'center', 
   },
   box:{
       flex:1,
       width:'100%'
   },
   //登录logo
   logo:{
    textAlign:'center', 
    alignItems:'center', 
    justifyContent:'flex-end',
    textAlignVertical:'center', 
    flex:1.5,
   },
   logoImg:{
     width:200,
     height:220,  
   },
   //登录信息框
   LoginTitle:{
    fontSize:30,
    color:'#000', 
    marginBottom:18, 
   },
   userInfo:{ 
    paddingTop:'2%', 
    alignItems:'center', 
    flex:2,
    // backgroundColor:'pink'
   },
   userForm:{
       backgroundColor:'#fff',
       borderColor:'#ccc',
       borderWidth:1,
       width:'96%', 
       textAlign:'center',
       marginTop:20, 
       height:150,
       alignItems:'center', 
       justifyContent:'center',
       textAlignVertical:'center', 
   },
   userInput:{
       width:'100%', 
       paddingLeft:6,
       borderWidth:0,
       borderColor:'rgba(255,255,255,0)' 
   },
   inputBox:{
     height:'50%',
    textAlign:'center', 
    alignItems:'center', 
    justifyContent:'center',
    textAlignVertical:'center', 
   },
   inputBox_a:{
  
    width:'100%'
   },
   inputBox_b:{
    borderTopColor:'#ccc',
    borderTopWidth:1,
    borderStyle:'solid',
   },
   LoginButtonBox:{
       width:'100%',
       padding:10 ,
       paddingTop:20,
       marginTop:13, 
       marginBottom:15,
   },
   LoginButton:{
       width:'100%',
       borderColor:Global.themeColor, 
       backgroundColor:Global.themeColor,
       height:50,
       
   },
   LoginButtonContainerStyle:{ 
   },
   LoginHelp:{
    flexDirection: 'row',
    paddingLeft:10 ,
    paddingRight:10 ,
   },
   LoginHelpfind:{
    flex:1,
    textAlign:'center', 
    alignItems:'center', 
    justifyContent:'center',
    textAlignVertical:'center', 
    fontSize:18
   },
   LoginHelpfind_a:{
    alignItems:'flex-start',
    color:Global.themeColor ,
    flex:1.3
    
   },
   LoginHelpfind_b:{ 
    textAlign:'left', 
    // fontWeight:'bold'
   },
   LoginHelpfind_c:{
    textAlign:'right', 
    // fontWeight:'bold',
    alignItems:'flex-end', 
   },
   //登录方式
   LoginType:{ 
    flexDirection: 'row', 
    
   },
   LoginTypeBox:{
     height:'100%', 
     flex:1,
     textAlign:'center', 
     alignItems:'center', 
     justifyContent:'center',
     textAlignVertical:'center',
     color:Global.themeColor, 
   },
   LoginTypeTitle:{ 
      textAlign:'center', 
      alignItems:'center', 
      justifyContent:'center',
      textAlignVertical:'center', 
      height:'5%',
      marginBottom:20
   },
   LoginTypeTitleText:{
    color:Global.themeColor, 
    fontSize:18
   },
   iconText:{
    color:Global.themeColor, 
     

   },
   iconImg:{ 
       width:50,
       height:50,
   }
});

export default styles;