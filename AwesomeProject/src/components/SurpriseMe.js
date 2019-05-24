import React, { Component } from 'react';
import { Image, ActivityIndicator, Linking } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default class SurpriseMe extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      loaded: false,
      page: Math.floor(Math.random() * 50),
      timeOut: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    let url = `http://www.recipepuppy.com/api/?p=${this.state.page}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson.results),
          loaded: true
        })
      })

  }

  render() {
    const { data, loaded } = this.state
    if (loaded) {
      return (
        <Container>
          <View>
            <DeckSwiper
              // onSwipeLeft={() => { alert('not saved') }}
              dataSource={data}
              renderItem={item =>
                <Card style={{ elevation: 3 }}
                >
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.thumbnail ? item.thumbnail : 'https://freeiconshop.com/wp-content/uploads/edd/food-outline.png' }} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.ingredients}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={{ uri: item.thumbnail ? item.thumbnail : 'https://freeiconshop.com/wp-content/uploads/edd/food-outline.png' }} />
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text onPress={() => { Linking.openURL(item.href) }}>View the recipe</Text>
                  </CardItem>
                </Card>
              }
            />
          </View>
        </Container>
      );
    } else {
      return <ActivityIndicator size="large" />
    }
  }
}
