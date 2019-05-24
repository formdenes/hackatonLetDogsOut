import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import MyHeader from './src/Header';
import FooterMenu from './src/Footer';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container >
        <MyHeader />
        <FooterMenu />
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
