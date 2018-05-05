import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom'
import HomePage from './HomePage'
import NotificationPage from './NotificationPage'
import ProfilePage from './ProfilePage'
import ChatPage from './ChatPage'
import SearchPage from './SearchPage'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      page: "HomeScreen",
    }
   
  }

  render() {
    return (
      <View style={styles.container}>
        
        {this.state.page === "HomeScreen" && <HomePage/>}
        {this.state.page === "NotificationScreen" && <NotificationPage/>}
        {this.state.page === "ProfileScreen" && <ProfilePage/>}
        {this.state.page === "ChatScreen" && <ChatPage/>}
        {this.state.page === "SearchScreen" && <SearchPage/>}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            
          }}
          activePage={this.state.page}

          type={"ripple"}
          tabbarBgColor={"#841584"}
          iconColor={"#ffffff"}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
              iconText: "Home"
            },
            {
              page: "NotificationScreen",
              icon: "notifications",
              iconText: "Notification"
            },
            {
              page: "ProfileScreen",
              icon: "person",
              iconText: "Profile"
            },
            {
              page: "ChatScreen",
              icon: "chatbubbles",
              iconText: "Chat"
            },
            {
              page: "SearchScreen",
              icon: "search",
              iconText: "Search"
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});