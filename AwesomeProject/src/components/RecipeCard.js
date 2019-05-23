import React, { Component } from 'react';
import { Image } from 'react-native';
import { Linking, H2, Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
// import { oneRecipe } from '../../../mockdatas/mockObject';

export default class RecipeCard extends Component {

  constructor(props) {
    super(props)
  }

  createIngredientList() {
    const { ingredients } = oneRecipe;
    return ingredients.split(',').map((element, index) => (
      <Text key={index} style={{
        fontSize: 22
      }}><Icon style={{ color: '#EF9441' }} name='nutrition' />{' ' + element.trim()}</Text>
    ))
  }

  render() {
    const { thumbnail: URL, title } = oneRecipe;
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
                <Button transparent textStyle={{ color: '#87838B' }}>
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