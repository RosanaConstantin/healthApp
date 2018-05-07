import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { Text, View, StyleSheet, Image, Button, Alert, Keyboard } from 'react-native';
import { Constants } from 'expo';


import "@expo/vector-icons"; // 6.3.1

import Stack from './components/InitialPage';
import Dashboard from './components/Dashboard';
//import { Security, ImplicitCallback } from '@okta/okta-react';

// const config = {
//   issuer: 'https://dev-502420.oktapreview.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oaevky1qwx75Qj4O0h7'
// }

export default class App extends React.Component {
  state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    componentDidMount() {
      Keyboard.dismiss();
   }

  render() {
    if (this.state.isLoggedIn) 
      return  <Dashboard 
     //   onLogoutPress={() => this.setState({isLoggedIn: false})}
    />;
    else
    return <Stack 
       // onLoginPress={() => this.setState({isLoggedIn: true})}
  />;
  }
}

