import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, List, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import Icon from './Icon'
import InfoText from './InfoText'

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listContainer: {
    marginBottom: 0,
    marginTop: 0,
    borderTopWidth: 0,
  },
  listItemContainer: {
    borderBottomColor: '#ECECEC',
  },
})


export default class SettingsPage extends React.Component {
  // static propTypes = {
  //   firstName: PropTypes.string.isRequired,
  //   lastName: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   avatar: PropTypes.string,

  // }

  static user = {};

  // componentWillMount() {
  //   fetch('http://192.168.1.101:1337/parse/functions/api-user-get-details', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Parse-Application-Id': '216TmAzCS6&W8R8jNkwE#KDy1k3#m9Vc'
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.error) {
  //         alert(response.error + ' Error while gettig user profile!');
  //       } else {

  //         this.user = JSON.stringify(response);
  //         alert(this.user);
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     })
  //     .done()
  // }


state = {
  pushNotifications: true,
}

onPressOptions = () => {
  this.props.navigation.navigate('options')
}

onChangePushNotifications = () => {
  this.setState(state => ({
    pushNotifications: !state.pushNotifications,
  }))
}

render() {
  const { firstName, lastName, email, avatar } = this.props
  return (
    <Text>
      bravo
      </Text>
    // <ScrollView style={styles.scroll}>
    //   <View style={styles.userRow}>
    //     <View style={styles.userImage}>
    //       <Avatar
    //         large
    //         rounded
    //         source={{
    //           uri: avatar,
    //         }}
    //       />
    //     </View>
    //     <View>
    //       <Text style={{ fontSize: 16 }}>{name}</Text>
    //       <Text
    //         style={{
    //           color: 'gray',
    //           fontSize: 16,
    //         }}
    //       >
    //         {firstEmail.email}
    //       </Text>
    //     </View>
    //   </View>
    //   <InfoText text="Account" />
    //   <List containerStyle={styles.listContainer}>
    //     <ListItem
    //       switchButton
    //       hideChevron
    //       title="Push Notifications"
    //       switched={this.state.pushNotifications}
    //       onSwitch={this.onChangePushNotifications}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{
    //             backgroundColor: '#FFADF2',
    //           }}
    //           icon={{
    //             type: 'material',
    //             name: 'notifications',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Currency"
    //       rightTitle="USD"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{ backgroundColor: '#FAD291' }}
    //           icon={{
    //             type: 'font-awesome',
    //             name: 'money',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Location"
    //       rightTitle="New York"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{ backgroundColor: '#57DCE7' }}
    //           icon={{
    //             type: 'material',
    //             name: 'place',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Language"
    //       rightTitle="English"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{ backgroundColor: '#FEA8A1' }}
    //           icon={{
    //             type: 'material',
    //             name: 'language',
    //           }}
    //         />
    //       }
    //     />
    //   </List>
    //   <InfoText text="More" />
    //   <List containerStyle={styles.listContainer}>
    //     <ListItem
    //       title="About US"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{ backgroundColor: '#A4C8F0' }}
    //           icon={{
    //             type: 'ionicon',
    //             name: 'md-information-circle',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Terms and Policies"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{ backgroundColor: '#C6C7C6' }}
    //           icon={{
    //             type: 'entypo',
    //             name: 'light-bulb',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Share our App"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{
    //             backgroundColor: '#C47EFF',
    //           }}
    //           icon={{
    //             type: 'entypo',
    //             name: 'share',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Rate Us"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{
    //             backgroundColor: '#FECE44',
    //           }}
    //           icon={{
    //             type: 'entypo',
    //             name: 'star',
    //           }}
    //         />
    //       }
    //     />
    //     <ListItem
    //       title="Send FeedBack"
    //       onPress={() => this.onPressOptions()}
    //       containerStyle={styles.listItemContainer}
    //       leftIcon={
    //         <Icon
    //           containerStyle={{
    //             backgroundColor: '#00C001',
    //           }}
    //           icon={{
    //             type: 'materialicon',
    //             name: 'feedback',
    //           }}
    //         />
    //       }
    //     />
    //   </List>
    // </ScrollView>
  )
}
}

