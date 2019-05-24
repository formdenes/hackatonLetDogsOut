import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
import OnePage from './OnePage';
import FoodFeed from "./components/FoodFeed.js"
import Search from "./Search.js";
import Favorites from './Favorites';
import SurpriseMe from './components/SurpriseMe'

const FoodFeedStack = createStackNavigator({
  Feed: FoodFeed,
  OnePage: OnePage,
},
  {
    initialRouteName: 'Feed',
  });

const FavoriteStack = createStackNavigator({
  FavoriteFeed: Favorites,
  FavoritePage: OnePage,
},
  {
    initialRouteName: 'FavoriteFeed',
  });

const FeedContainer = createAppContainer(FoodFeedStack);

const TabNavigator = createBottomTabNavigator({
  Home: FeedContainer,
  Search: Search,
  Shuffle: SurpriseMe,
  Settings: FavoriteStack,
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
      inactiveBackgroundColor: '#ffd800',
    },
  });



export default createAppContainer(TabNavigator);