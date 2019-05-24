import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';
import { H2 , Header, Button, Icon, Left, Body, Right, Title, View, Text, Input } from 'native-base';
// import { Button } from 'react-native-elements';
// import FeedHeader from '../FeedHeader';


export default class FoodFeed extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      testdata: [],
      searchVisible: false,
      searchTerms: ''
    }
  }

  static navigationOptions = {
    header: null,
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
    let searchBar;
    if (searchVisible) {
      searchBar = (
        <View style={styles.searchBarBG}>
          <TextInput
            autoFocus={true}
            style={styles.searchBar}
            containerStyle={{ backgroundColor: 'blue' }}
            placeholder="Add your ingredients"
            placeholderTextColor="black"
            onChangeText={terms => this.setState({ searchTerms: terms })}
            value={this.state.searchTerms}
            onSubmitEditing={() => {
              this.setState({
                data: []
              })
              this.getData()
            }}
          />
        </View>)
    } else {
      /* searchBar = <View></View> */
    }
    const header = (
      <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => this.setState(
                { searchVisible: this.state.searchVisible !== true }
              )}
              style={{
                backgroundColor: '#ffd800',
                marginRight: '40%',
              }}>
              <Icon name='search' style={{ color: '#8512AF' }} />
            </Button>
          </Left>
          <Right>
            <Body>
              <Title style={styles.headerTitle}>DOGFOOD</Title>
            </Body>
          </Right>
        </ Header>
    )
    return (
      <View >
        {header}
        {searchBar}
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
  },
  searchBarText: {
    flex: 1
  },
  searchButton: {
    // height: 30,
    marginBottom: 8
  },
  searchContainer: {
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#ffd800',
  },
  headerTitle: {
    color: '#8512AF',
    justifyContent: 'center',
    marginRight: '15%'
  },
  view: {
    backgroundColor: 'black'
  },
  searchBar: {
    color: '#8512AF',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    paddingLeft: 30,
    margin: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'grey',
  },
  searchBarBG: {
    backgroundColor: '#ffd800'
  }
})
