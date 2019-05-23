import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Right, Title, View } from 'native-base';
import { StyleSheet } from 'react-native'

export default class MyHeader extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title>DOGFOOD</Title>
          </Body>
          <Right />
        </ Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
});