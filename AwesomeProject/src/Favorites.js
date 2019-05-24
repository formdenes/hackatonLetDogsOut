import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';
import { H2 } from 'native-base';
import { Button } from 'react-native-elements';


export default class FoodFeed extends Component {
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
    let url = 'http://54.93.64.90:8080';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          data: responseJson.rows,
        })
      })
  }

  renderRow = ({ item }) => {
    return (
      <TouchableHighlight onPress={(e) => {
        console.log(item);
        return this.props.navigation.navigate('OnePage', item);
      }}>
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
    const searchVisible = this.state.searchVisible;
    /* let searchBar;
    if (searchVisible) {
      searchBar = (<View style={styles.searchContainer}>
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
              data: []
            })
            this.getData()
          }}
        />
      </View>)
    } else {
      searchBar = <View></View>
    } */
    return (
      <View>
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
    display: 'flex',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  itemImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
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
    // marginTop: 75,
    // marginLeft: 10,
    // marginRight: 10,
    // position: 'fixed'
  },
  searchBarText: {
    flex: 1
  },
  searchButton: {
    // height: 30,
    marginBottom: 8
  }
})
