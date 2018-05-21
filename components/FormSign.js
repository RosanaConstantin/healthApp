
import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import {
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    KeyboardAvoidingView,
    Text
} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

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
      password: true,
      secureTextEntry: true,
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    }
  }
};


export default class FormInsideSign extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          value: {
              username:'',
              password: ''
          }
      }
      global.sessionToken = '';
  }

  componentWillUnmount() {
      this.setState = {
          value: {
              username:'',
              password: null
          }
      }
  }

  _onChange = (value) => {
      this.setState({
          value
      })
  }

  _handleAdd = () => {
      const value = this.refs.form.getValue();
      console.log(value);
      // If the form is valid...
      if (value) {
          const data = { 
              username: value.username,
              password: value.password
          }
          // Serialize and post the data
          const json = JSON.stringify(data);
          fetch('http://192.168.1.101:1337/parse/functions/api-user-login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-Parse-Application-Id': '216TmAzCS6&W8R8jNkwE#KDy1k3#m9Vc'
              },
              body: json
          })
              .then((response) => response.json())
              .then((response) => {
                   if(response.result === 500){
                       alert('Invalid username/password');
                       
                  } else {
                      responseJson = JSON.stringify(response);
                    global.sessionToken = response.result && response.result.sessionToken;
                    Actions.dashboard();
                  }
              })
              .catch((error) => {
                  alert(error);
              })
              .done()
      } else {
          alert('Please fix the errors listed and try again.')
      }
  }

  render() {
      return (
          <ScrollView  style={styles.container} keyboardShouldPersistTaps='always'>
              <Form
                  ref='form'
                  type={User}
                  options={options}
                  value={this.state.value}
                  onChange={this._onChange}
              />
              <TouchableHighlight onPress={this._handleAdd}>
                  <Text style={[styles.button, styles.greenButton]}>Sign in</Text>
              </TouchableHighlight>
              
             </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 50,
      flex: 1,
      flexDirection: 'column'
  },
  button: {
      borderRadius: 4,
      padding: 20,
      textAlign: 'center',
      marginBottom: 20,
      color: '#fff'
  },
  greenButton: {
      backgroundColor: '#4CD964'
  },
  centering: {
      alignItems: 'center',
      justifyContent: 'center'
  }
})

