import React, { Component } from 'react';
import { Container, Content} from 'native-base';
import { StyleSheet } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
});