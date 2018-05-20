import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, Keyboard } from 'react-native';
import { Constants } from 'expo';
import {Actions, Scene, Router} from 'react-native-router-flux';

import "@expo/vector-icons"; // 6.3.1

import FormInsideJoin from './components/FormJoin';
import FormInsideSign from './components/FormSign';
import Dashboard from './components/Dashboard';
import InitialPage from './components/InitialPage';
import IntroPage from './components/IntroPage';


export default class App extends React.Component {

    componentDidMount() {
      Keyboard.dismiss();
      Actions.intro();
   }

  render() {
      return <Router navigationBarStyle={{ display: 'none'}}>
      <Scene key="root">
        <Scene key="joinIn" component={FormInsideJoin} />
        <Scene key="dashboard" component={Dashboard} />
        <Scene key="signIn" component={FormInsideSign} />
        <Scene key="home" component={InitialPage} />
        <Scene key="intro" component={IntroPage} />
      </Scene>
    </Router>
    }
  }

