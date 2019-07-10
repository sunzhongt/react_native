/**
 *  App 
 */

import React, {Component,Fragment} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppRouter from './pages/AppRouter'; 
import {Provider} from 'react-redux'; 
import store from './store';
export default class App extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
           <AppRouter/>
        </Provider>
       
      </Fragment>
      
    );
  }
}

const styles = StyleSheet.create({
  
});
