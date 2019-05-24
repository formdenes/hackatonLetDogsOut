import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container } from 'native-base';
import SplashScreen from './src/components/SplashScreen';
import MyHeader from './src/Header'
import FooterMenu from './src/Footer'


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  waitingTwoSeconds = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('kecske') },
        2000
      )
    );
  }

  async componentDidMount() {
    const data = await this.waitingTwoSeconds();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <Container >
        <StatusBar />
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
