import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Email from './Email'
import Tel from './Tel'
import images from './images'

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent'
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: "#01C89E",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})

export default class ProfilePage extends React.Component {

  onPressTel = number => {
    Linking.openURL(`tel:${number}`).catch(err => console.log('Error:', err))
  }

  onPressEmail = (email) => {
    Linking.openURL(`mailto:${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err)
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
          <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={images['background']}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={ global.user.avatar}
            />
            <Text style={styles.userNameText}>{global.user.firstName}</Text>
              <Text style={styles.userNameText}>{global.user.lastName}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {global.user.location}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderTel = () => {
      return (
          <Tel
              number={global.user.phone}
              onPressTel={this.onPressTel}
          />
      )
  }

  renderEmail = () => {
      return (
          <Email
              email={global.user.email}
              onPressEmail={this.onPressEmail}
          />
      )
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card  >
            {this.renderHeader()}
            {this.renderTel()}
            {this.renderEmail()}
          </Card>
        </View>
      </ScrollView>
    )
  }
}

