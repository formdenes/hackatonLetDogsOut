import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from "native-base";
<<<<<<< HEAD
import FoodFeed from "./components/FoodFeed.js";
import SurpriseMe from "./components/SurpriseMe";
=======
import Home from "./Home"
import OnePage from './OnePage';
import FoodFeed from "./components/FoodFeed.js"
import Random from "./Random.js";
>>>>>>> trueKhamsinsc
import Settings from "./Settings.js";
import Search from "./Search.js";
import Favorites from './Favorites';

const FoodFeedStack = createStackNavigator({
  Feed: FoodFeed,
  OnePage: OnePage,
},
  {
    initialRouteName: 'Feed',
  });

const FeedContainer = createAppContainer(FoodFeedStack);

const TabNavigator = createBottomTabNavigator({
  Home: FeedContainer,
  Search: Search,
<<<<<<< HEAD
  Shuffle: SurpriseMe,
  Settings: Settings,
=======
  Shuffle: Random,
  Settings: Favorites,
>>>>>>> trueKhamsinsc
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