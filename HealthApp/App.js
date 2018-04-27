import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { Constants } from 'expo';

import "@expo/vector-icons"; // 6.3.1

export default class App extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

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
          source={require('./assets/pulse.png')}
          style={{ height: 140, width: 360 }}
        />
      
         <TouchableOpacity style={styles.singIn}
          title="Sing in"
          onPress={this._handleButtonPress}>
          </TouchableOpacity>
      
        <Button style={styles.joinIn}
          title="Join in"
          onPress={this._handleButtonPress}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: 15,
    textAlign: 'center'
  },
  singIn: {
    backgroundColor: '#47525E',
    width: 100,
    margin: 100,
    padding: 10,
    color: '#fffff'
  //  textAlign: 'center'
    
  }
});