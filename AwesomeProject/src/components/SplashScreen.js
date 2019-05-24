import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'orange' }];
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    return (
      <View style={viewStyles}>
        <Image
          style={{ width: width, height: height }}
          source={require('../loadingCropped.png')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});
