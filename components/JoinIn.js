import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import JoinedIn from './JoinedIn';

import t from 'tcomb-form-native';

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  }
};

const Form = t.form.Form;

class JoinedInScreen extends React.Component {
  render() {
    return (
      <JoinedIn/>
    );
  }
}

class JoinInScreen extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
    render() {
      return (
        <View style={styles.container}>
          <Form type={User} 
           ref={c => this._form = c}
          options={options}
          style={styles.form}/>
          <Button
            style={styles.joinIn}
            title="Join in"
            color="#841584"
            onPress={() => this.props.navigation.navigate('JoinedIn')}
          />
        </View>
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
