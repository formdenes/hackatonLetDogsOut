import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Footer } from 'native-base';
import Main from './src/Main';
import MyHeader from './src/Header';
import FooterMenu from './src/Footer';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container >
        <MyHeader />
        <Main />
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
