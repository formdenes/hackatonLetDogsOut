import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Right, Title, View } from 'native-base';
import { StyleSheet } from 'react-native';

export default class MyHeader extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => alert('i be clicked')}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    backgroundColor: '#ffd800',
  },
  headerTitle: {
    color: '#8512AF',
    justifyContent: 'center',
    marginRight: '15%'
  }
});