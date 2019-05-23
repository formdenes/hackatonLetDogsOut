import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Left, Body, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native'

export default class MyHeader extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title>DOGFOOD</Title>
          </Body>
          <Right />
        </ Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
});