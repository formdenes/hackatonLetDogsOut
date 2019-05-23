import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Right, Title } from 'native-base';
import TestComponent from './components/TestComponent'
// import RecipeCard from './components/RecipeCard'
import SearchBar from './components/SearchBar';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>DOGFOOD</Title>
          </Body>
          <Right />
        </ Header>
        <Content>
        </Content>
        <TestComponent />
        {/* <RecipeCard /> */}
        {/* <SearchBar /> */}
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}