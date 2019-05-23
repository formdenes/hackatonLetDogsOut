import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { Form } from 'native-base';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      /*      text2: '',
           text3: '',
           text4: '',
           text5: '' */
    };
  }

  handleSubmit(props) {
    props.alert()
  }

  render() {
    return (
      <View style={styles.searchComponent}>
        <Form style={styles.form}>
          <TextInput
            style={styles.inputField}
            placeholder="Search for food or article"
            onChangeText={(text1) => this.setState({ text1 })}
          />
        </Form>
        <Button
          onPress={this.handleSubmit}
          title="Search"
          color="purple"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  inputField: {
    height: 40,
    fontSize: 20,
    margin: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 20,
  },
  form: {
    margin: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 20,
    /*  marginTop: 90, */
    marginBottom: 40
  }
})