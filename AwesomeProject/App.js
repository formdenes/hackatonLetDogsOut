import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
import InstaClone from './src/InstaClone.js'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { OnePage, Favorites } from './src/components/presentation/';
class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: Favorites,
  OnePage: OnePage,
},
  {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;