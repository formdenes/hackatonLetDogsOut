import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container } from 'native-base';
// import MyHeader from './src/Header';
import FooterMenu from './src/Footer';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container >
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
