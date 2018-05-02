import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import SignLogic from './SignIn';
import JoinIn from './JoinIn';

class SignLogicScreen extends React.Component {
    render() {
      return (
        <SignLogic/>
      );
    }
  }
  
  class JoinInScreen extends React.Component {
    render() {
      return (
        <JoinIn/>
      );
    }
  }
  
  // The stylesheet is here, and then below it I have:
 class InitialPageScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
      
              <Text style={styles.title}>
                HealthApp
              </Text>
      
              <Text style={styles.paragraph}>
                Keep in touch with your health
              </Text>
      
              <Image
                source={require('../assets/pulse.png')}
                style={{ height: 140, width: 410 }}
              />
      
              <View style={{ marginTop: 50, height: 50, width: 100 }} >
                <Button style={styles.singIn}
                  title="Sign in"
                  color="#841584"
                  onPress={() => this.props.navigation.navigate('SignLogic')}
                />
              </View>
      
              <View style={{ marginTop: 20, width: 100 }} >
                <Button style={styles.joinIn}
                  title="Join in"
                  color="#841584"
                  onPress={() => this.props.navigation.navigate('JoinIn')}
                />
              </View>
            </View>
            
          );
      }
  }
  
  const RootStack = StackNavigator(
    {
      InitialPage: {
        screen: InitialPageScreen,
      },
      SignLogic: {
        screen: SignLogicScreen,
      }, 
       JoinIn: {
        screen: JoinInScreen,
      },
    },
    {
      initialRouteName: 'InitialPage',
    }
  );

  export default class Stack extends React.Component {
    render() {
    return (<RootStack style={styles.root}/>);
    }
  }

const styles = StyleSheet.create({
    root: {
      backgroundColor: '#56C4BE'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#56C4BE',
    },
    title: {
      fontSize: 50,
      fontWeight: '500',
      textAlign: 'center',
      color: '#FFFFFF',
    },
    paragraph: {
      fontWeight: '300',
      color: '#FFFFFF',
      fontSize: 13,
      marginTop: 20,
      textAlign: 'center'
    },
    singIn: {
      backgroundColor: '#47525E',
      width: 100,
      margin: 100,
      padding: 10
    },
    joinIn: {
      backgroundColor: '#47525E',
      width: 100,
      margin: 100,
      padding: 10
    }
  });
