/** 
 * index 首页
 *
 * 
 */

import React, {Component} from 'react';
import {  Platform, StyleSheet, Text, View,  Image,  Dimensions} from 'react-native'; 

export default class Index extends Component<Props> {
    static navigationOptions = {
        title: '首页',
      };

      constructor(props) {
        super(props);
         this.state = { 
       
      };
     }


     // 轮播图
// renderBanner() {
//   if (this.state.swiperShow) {
//    console.log ('返回值' + this.state.swiperShow);
//   return (
//   <Swiper
//     style={styles.wrapper}
//     height={width * 40 / 75}
//     showsButtons={false}
//     removeClippedSubviews={false} //这个很主要啊，解决白屏问题
//     autoplay={true}
//     horizontal ={true}
//     paginationStyle={styles.paginationStyle}
//     dotStyle={styles.dotStyle}
//     activeDotStyle={styles.activeDotStyle}
// >
//    <Image source={{uri:'https://github.com/LoveHannah/Random-img/blob/master/102.jpg?raw=true'} } style={styles.bannerImg} />
//    <Image source={{uri:'https://github.com/LoveHannah/Random-img/blob/master/103.jpg?raw=true'} } style={styles.bannerImg} />
//    <Image source={{uri:'https://github.com/LoveHannah/Random-img/blob/master/104.jpg?raw=true'} } style={styles.bannerImg} />
//    <Image source={{uri:'https://github.com/LoveHannah/Random-img/blob/master/105.jpg?raw=true'} } style={styles.bannerImg} />
   

// </Swiper>

// );

// } else {
// return (
//    <View style={styles.wrapper}>
//        <Image source={{uri:'https://github.com/LoveHannah/Random-img/blob/master/102.jpg?raw=true'} }  style={styles.bannerImg} />
//    </View>
//  );
// }
// }

componentDidMount() {
 
}

  render() {
    return (
      <View style={styles.container}>
         <Text>sdfsdf</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
 
});