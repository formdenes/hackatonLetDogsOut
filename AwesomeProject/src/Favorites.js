import React, { Fragment, Component } from 'react';
import { StyleSheet, View, Content, FlatList, Image, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';
import { Button, Icon, Text, H2 } from 'native-base';


export default class FoodFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 1,
      testdata: [],
      searchVisible: true,
      searchTerms: '',
      button: (item) => (<Button style={{ padding: 5, height: 40, width: 160, backgroundColor: '#8512AF' }} textStyle={{ color: '#8512AF' }} onPress={() => { this.deleteFavorite(item).catch(console.log) }}>
        <Text style={{ color: 'white' }}>{'Delete Favorite  '}{/* <Icon name="flame" style={{ color: 'white' }} /> */}</Text>
      </Button>)
    }
  }

  componentDidMount() {
    this.getData()
  }

  deleteFavorite = async (item) => {
    const databaseURL = 'http://54.93.64.90:8080/delFav'; // TODO: change to the proper endpoint
    const id = item.fav_id; // TODO: change to props
    const postFavoriteOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fav_id: id }),
    };
    const response = await fetch(databaseURL, postFavoriteOptions);
    const respData = await response.json();
    if (respData.rows.affectedRows === 1) {
      console.log(this.state.data, 'show me the filtered data');
    }
    console.log('delete resp', respData);
    this.getData();
  }

  getData = async () => {
    let url = 'http://54.93.64.90:8080';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.rows,
        })
      })
  }

  renderRow = ({ item }) => {
    console.log('how an item looks like', item)
    return (

      <TouchableHighlight onPress={() => {
        return this.props.navigation.navigate('FavoritePage', item);
      }}>
        <View style={styles.item} >
          <Image source={{ uri: item.thumbnail ? item.thumbnail : 'https://freeiconshop.com/wp-content/uploads/edd/food-outline.png' }} style={styles.itemImage} />
          <H2 style={styles.itemText}>{item.title}</H2>{this.state.button(item)}
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
    }
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
