/** 
 * Appjs 项目容器
 *
 */
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import React, {Component,Fragment} from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import Pages from './Pages/RouterNavigetion';    
  class App extends Component<Props> {
  render() {
    return (
      <Fragment>
         <Pages />  
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  
});
const AppNavigator = createSwitchNavigator({
  App: {
    screen: App
  },
 
});

export default createAppContainer(AppNavigator);
// export default App;


