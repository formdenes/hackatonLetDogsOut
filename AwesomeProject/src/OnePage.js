import React, { Component } from 'react';
import { Image } from 'react-native';
import { Linking, H2, Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const oneRecipe = {
  "title": "Amy's Barbecue Chicken Salad",
  "href": "http:\/\/allrecipes.com\/Recipe\/Amys-Barbecue-Chicken-Salad\/Detail.aspx",
  "ingredients": "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
  "thumbnail": "http:\/\/img.recipepuppy.com\/10.jpg",
};


export default class OneRecipePage extends Component {

  /*   constructor(props) {
      super(props)
     
    } */

  createIngredientList() {
    const { ingredients } = oneRecipe;
    return ingredients.split(',').map((element, index) => (
      <Text key={index} style={{
        fontSize: 22
      }}><Icon style={{ color: '#EF9441' }} name='nutrition' />{' ' + element.trim()}</Text>
    ))
  }

  postFavorite() {
    const databaseURL = '10.27.6.159:8080'; // TODO: change to the proper endpoint
    const postData = oneRecipe; // TODO: change to props
    const postFavoriteOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    };
    fetch(databaseURL, postFavoriteOptions)
      .then(response => response.json())
      .catch(console.log);
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
                <Button transparent textStyle={{ color: '#87838B' }} onPress={() => {

                }}>
                  <Icon name="pizza" />
                  <Text>Add Favorite</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
};

