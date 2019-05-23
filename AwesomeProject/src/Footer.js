import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
import Home from "./Home.js";
import Random from "./Random.js";
import Settings from "./Settings.js";
import Search from "./Search.js";

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Search: Search,
  Shuffle: Random,
  Settings: Settings,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Icon name={navigation.state.routeName.toLowerCase()} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(TabNavigator);