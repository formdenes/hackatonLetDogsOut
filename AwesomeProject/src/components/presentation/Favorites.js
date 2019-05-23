import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image, ActivityIndicator, TouchableHighlight } from 'react-native';
import { H2 } from 'native-base';
import { mockRecipes } from '../../../mockdatas/mockObject';
/* import { AppNavigator } from '../../../App'; */
// import console = require('console');
// import console = require('console');

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: mockRecipes.results,
      page: 1,
      testdata: [],
      searchVisible: false
    }
  }
  /* 
    componentDidMount() {
      this.getData()
    } */

  getData = async () => {
    /*  const url = `10.27.6.159:8080`;
     const response = await fetch(url);
     const respData = await response.json();
     const { rows: data } = respData; */
    const { results } = mockRecipes;
    this.setState({
      recipes: results,
    });
  }

  renderRow = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('OnePage')}>
        <View style={styles.item} >
          <Image source={{ uri: item.thumbnail ? item.thumbnail : 'https://freeiconshop.com/wp-content/uploads/edd/food-outline.png' }} style={styles.itemImage} />
          <H2 style={styles.itemText}>{item.title}</H2>
        </View >
      </TouchableHighlight>
    )
  }

  /*   handleLoadMore = () => {
      this.setState(
        { page: this.state.page + 1 },
        this.getData
      )
    } */

  /*   renderFooter = () => {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      )
    } */

  render() {
    return (
      <FlatList
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        style={styles.container}
        data={this.state.recipes}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      /*         onEndReached={this.handleLoadMore} */
      // onEndReachedThreshold={0}
      /*         ListFooterComponent={this.renderFooter} */
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,

  },
  itemImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    resizeMode: 'cover'
  },
  itemText: {
    padding: 5,
  },
  loader: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})