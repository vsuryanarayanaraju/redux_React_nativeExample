/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './State/root.store';
import Login from './src/Login';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
