import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
import Home from "./Home"
import FoodFeed from "./components/FoodFeed.js";
import SurpriseMe from "./components/SurpriseMe";
import Random from "./Random.js";
import Settings from "./Settings.js";
import Search from "./Search.js";

const TabNavigator = createBottomTabNavigator({
  Home: FoodFeed,
  Search: Search,
  Shuffle: SurpriseMe,
  Settings: Settings,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Icon name={navigation.state.routeName.toLowerCase()} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ffd800',
      inactiveTintColor: '#8512AF',
      activeBackgroundColor: '#8512AF',
      inactiveBackgroundColor: '#ffd800'
    },
  });

export default createAppContainer(TabNavigator);