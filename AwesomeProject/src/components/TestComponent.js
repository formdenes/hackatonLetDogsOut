import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';
import { H2 } from 'native-base';
import { Button, SearchBar } from 'react-native-elements'

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      testdata: [],
      searchVisible: true,
      searchTerms: ''
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    let url;
    if (this.state.searchTerms === '') {
      url = `http://www.recipepuppy.com/api/?p=${this.state.page}`
    } else {
      url = `http://www.recipepuppy.com/api/?i=${this.state.searchTerms}&p=${this.state.page}`
    };

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson.results)
        })
      })
  }

  renderRow = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => { alert(item.title) }}>
        <View style={styles.item} >
          <Image source={{ uri: item.thumbnail ? item.thumbnail : 'https://freeiconshop.com/wp-content/uploads/edd/food-outline.png' }} style={styles.itemImage} />
          <H2 style={styles.itemText}>{item.title}</H2>
        </View >
      </TouchableHighlight>
    )
  }

  handleLoadMore = () => {
    this.setState(
      { page: this.state.page + 1 },
      this.getData
    )
  }

  renderFooter = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  render() {
    return (
      <View>
        <View style={styles.searchContainer}>
          <TextInput
            containerStyle={{ backgroundColor: 'blue' }}
            placeholder="Add your ingredients"
            placeholderTextColor="black"
            onChangeText={terms => this.setState({ searchTerms: terms })}
            value={this.state.searchTerms}
          />
          <Button
            style={styles.searchButton}
            title="search"
            onPress={() => {
              this.setState({
                data: [],
                searchVisible: false
              })
              this.getData()
            }}
          />
        </View>
        <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.handleLoadMore}
          // onEndReachedThreshold={0}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },
  item: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,

  },
  itemImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  itemText: {
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: "row",
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
    // position: 'fixed'
  },
  searchBarText: {
    flex: 1
  },
  searchButton: {
    height: 30,
    marginBottom: 8

  }
})
