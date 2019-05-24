import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
import OnePage from './OnePage';
import FoodFeed from "./components/FoodFeed.js"
import Search from "./Search.js";
import Favorites from './Favorites';
import SurpriseMe from './components/SurpriseMe';
import AddRecipes from './components/AddRecipes'

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
  Search: AddRecipes,
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
      activeTintColor: '#ffd800',
      inactiveTintColor: '#8512AF',
      activeBackgroundColor: '#8512AF',
      inactiveBackgroundColor: '#ffd800',
    },
  });



export default createAppContainer(TabNavigator);