import React, { Component } from 'react';
import { Image, ActivityIndicator, Linking } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../chicken.jpg'),
  },
  {
    text: 'Card Two',
    name: 'One',
    image: require('../chicken.jpg'),
  },
  {
    text: 'Card Three',
    name: 'One',
    image: require('../chicken.jpg'),
  },
];

export default class SurpriseMe extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      loaded: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    let url = `https://www.food2fork.com/api/search?key=c56c10f2ab9903dc69ed2e642518da30`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson.recipes),
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
              dataSource={data}
              renderItem={item =>
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.image_url }} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.publisher}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={{ uri: item.image_url }} />
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text onPress={() => { Linking.openURL(item.source_url) }}>View the recipe</Text>
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