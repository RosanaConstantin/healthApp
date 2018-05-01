import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';


export default class SignIn extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
            <Card>
              <FormLabel>Username</FormLabel>
              <FormInput placeholder="Username..." />
              <FormLabel>Password</FormLabel>
              <FormInput secureTextEntry placeholder="Password..." />
        
              <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="SIGN IN"
                onPress={() => {
                  onSignIn().then(() => navigation.navigate("SignedIn")); // NEW LOGIC
                }}
              />
            </Card>
          </View>
          )
      }
  }