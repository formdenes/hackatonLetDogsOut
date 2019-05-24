import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
import Home from "./Home"
import OnePage from './OnePage';
import FoodFeed from "./components/FoodFeed.js"
import Random from "./Random.js";
import Settings from "./Settings.js";
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
  'Suprise!': SurpriseMe,
  Favorites: FavoriteStack,
  New: Settings,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const pageName = navigation.state.routeName;
        const name = pageName === 'Home' ? 'home' : pageName === 'Suprise!' ? 'paw' : pageName === 'New' ? 'add' : 'heart';
        return <Icon name={name} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });



export default createAppContainer(TabNavigator);