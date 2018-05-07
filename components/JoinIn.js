import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Modal, KeyboardAvoidingView, ScrollView  } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import JoinedIn from './JoinedIn';
import FormJoin from './Form';

class JoinedInScreen extends React.Component {
  render() {
    return (
      <JoinedIn/>
    );
  }
}

class JoinInScreen extends React.Component {

  handleSubmitForm(formData) {
    console.log(formData)
  }

    render() {
      return (
          <FormJoin/>
          );
      }
  }

  const JoinInApp = StackNavigator(
    {
      JoinIn: {
        screen: JoinInScreen,
      },
      JoinedIn: {
        screen: JoinedInScreen,
      }
    },
    {
      initialRouteName: 'JoinIn',
    }
  );

  export default class JoinLogic extends React.Component {
    render() {
    return (<JoinInApp style={styles.root}/>);
    }
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 30,
      backgroundColor: '#ffffff',
    },
    form: {

    },
    root: {
      backgroundColor: '#56C4BE'
    },
    JoinIn: {
      padding: 20,
    }
  });
