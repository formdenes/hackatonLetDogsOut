import React, { Component } from 'react';
import { Image } from 'react-native';
import { StyleSheet, Linking, H2, Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class OneRecipePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      button: () => (<Button transparent textStyle={{ color: '#87838B' }} onPress={() => { this.postFavorite().catch(console.log) }}>
        <Icon name="pizza" />
        <Text>Add Favorite</Text>
      </Button>),
    }

  }

  createIngredientList() {
    const { ingredients } = this.props.navigation.state.params;
    return ingredients.split(',').map((element, index) => (
      <Text key={index} style={{
        fontSize: 22
      }}><Icon style={{ color: '#EF9441' }} name='nutrition' />{' ' + element.trim()}</Text>
    ))
  }

  /*   renderFavButton = () => {
  
    } */

  postFavorite = async () => {
    const databaseURL = 'http://54.93.64.90:8080/addFav'; // TODO: change to the proper endpoint
    const postData = this.props.navigation.state.params; // TODO: change to props
    const postFavoriteOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    };
    const response = await fetch(databaseURL, postFavoriteOptions);
    const respData = await response.json();
    if (respData.rows.affectedRows === 1) {
      this.setState({
        button: () => (<Button transparent textStyle={{ color: 'red' }}>
          <Icon name="pizza" />
          <Text>Added to Favorite</Text>
        </Button>)
      })

    }
    console.log('fetch good resp', respData);
  }

  render() {
    console.log('props', this.props)
    const { thumbnail: URL, title } = this.props.navigation.state.params;
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: URL }} />
                <Body>
                  <Text>{title}</Text>
                  <Icon style={{ color: 'blue' }} name='cloud-circle' /* onPress={
                     () => {
                       Linking.openURL('https://www.google.com/').catch(err => console.log('linkerr: ', err));
                     } 
                  } */ />
                </Body>
              </Left>
            </CardItem>
            <CardItem >
              <Body style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
                <Image source={{ uri: URL }} style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                  marginBottom: 10,
                  marginLeft: 90,
                }} />
                <Content contentContainerStyle={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                  <H2 style={{
                    margin: 5, fontWeight: 'bold'
                  }}>{'Ingredients: '}</H2>
                  {this.createIngredientList()}
                </Content>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                {/* <Button transparent textStyle={{ color: '#87838B' }} onPress={() => { this.postFavorite().catch(console.log) }}>
                  <Icon name="pizza" />
                  <Text>Add Favorite</Text>
                </Button> */}
                {this.state.button()}
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
};

/* const styles = StyleSheet.create({
  favorite: {
    // marginTop: 20,
  },
}) */