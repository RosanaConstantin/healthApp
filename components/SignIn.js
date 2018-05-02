import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import SignedIn from './SignedIn';

import t from 'tcomb-form-native';

const User = t.struct({
  username: t.String,
  password: t.String
});

const options = {
  fields: {
    username: {
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

class SignedInScreen extends React.Component {
  render() {
    return (
      <SignedIn/>
    );
  }
}

class SignInScreen extends React.Component {
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
            style={styles.signIn}
            title="Sign in"
            color="#841584"
            onPress={() => this.props.navigation.navigate('SignedIn')}
          />
        </View>
          );
      }
  }

  const SignInApp = StackNavigator(
    {
      SignIn: {
        screen: SignInScreen,
      },
      SignedIn: {
        screen: SignedInScreen,
      }
    },
    {
      initialRouteName: 'SignIn',
    }
  );

  export default class SignLogic extends React.Component {
    render() {
    return (<SignInApp style={styles.root}/>);
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
    signIn: {
      padding: 20,
    }
  });
