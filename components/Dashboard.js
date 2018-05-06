import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom'
import HomePage from './HomePage'
import NotificationPage from './NotificationPage'
import ProfilePage from './ProfilePage'
import ActivityPage from './ActivityPage'
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
        
        {this.state.page === "ProfileScreen" && <ProfilePage/>}
        {this.state.page === "NotificationScreen" && <NotificationPage/>}
        {this.state.page === "HomeScreen" && <HomePage/>}
        {this.state.page === "ActivityScreen" && <ActivityPage/>}
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
              page: "ProfileScreen",
              icon: "person",
              iconText: "Profile"
            },
            {
              page: "NotificationScreen",
              icon: "notifications",
              iconText: "Notification"
            },
             
            {
              page: "HomeScreen",
              icon: "home",
              iconText: "Home"
            },
            {
              page: "ActivityScreen",
              icon: "pulse",
              iconText: "Activity"
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
    flex: 1,
  }
});