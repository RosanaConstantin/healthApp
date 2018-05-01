import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import { Constants } from 'expo';


import "@expo/vector-icons"; // 6.3.1

import Stack from './components/InitialPage';
import Secured from './components/Secured';
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

  render() {
    if (this.state.isLoggedIn) 
      return  <Secured 
        onLogoutPress={() => this.setState({isLoggedIn: false})}
    />;
    else
    return <Stack 
        onLoginPress={() => this.setState({isLoggedIn: true})}
  />;
  }
}

