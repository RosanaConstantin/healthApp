import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux';
import { Left } from 'native-base';

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%"
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircleExit: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-end'
  },
  image: {
    width: 420,
    height: 400,
    opacity: 0.8
  }
});

const slides = [
  
  {
    key: 'somethun1',
    title: 'Health App',
    text: 'Get your Health App for health monitoring!',
    image: require('../assets/fitness-health-screen-dbruggisser.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#7E7D79',
  },
  {
    key: 'somethun-dos',
    title: 'Do not forget about sport!',
    text: 'Get healthier each day!',
    image: require('../assets/man.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#0ACA9A',
  },
  {
    key: 'somethun',
    title: 'Reach daily goals!',
    text: 'Don\'t limit your challenges. \n Challenge your limits!',
    image: require('../assets/goals.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#3FB0B6',
  }
];

export default class IntroPage extends React.Component {

  _renderNextButton = () => {
    return (
        <View style={styles.buttonCircle}>
          <Ionicons
            name="md-arrow-round-forward"
            color="rgba(255, 255, 255, .9)"
            size={24}
            style={{ backgroundColor: 'transparent' }}
          />
        </View>     
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
          onPress={() => Actions.home()}
        />
      </View>
    );
  }
  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircleExit}>
        <Ionicons
          name="md-exit"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
          onPress={()=>Actions.home()}
        />
     </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <AppIntroSlider
          showSkipButton
          slides={slides}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderSkipButton={this._renderSkipButton}
        />
      </View>
    );
  }
}