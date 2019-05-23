import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
import Home from "./Home"
import OnePage from './OnePage';
import FoodFeed from "./components/FoodFeed.js"
import Random from "./Random.js";
import Settings from "./Settings.js";
import Search from "./Search.js";

const FoodFeedStack = createStackNavigator({
  Feed: FoodFeed,
  OnePage: OnePage,
},
  {
    initialRouteName: 'Feed',
  });

const FeedContainer = createAppContainer(FoodFeedStack);

const TabNavigator = createBottomTabNavigator({
  Home: FoodFeedStack,
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