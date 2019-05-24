import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import postRecipe from '../services/postRecipes';

export default class AddRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      image: '',
      ingredientPresentation: '',
      writeText: '',
      collection: {}
    }
  }

  handleSubmit = () => {
    let collection = {};
    collection.title = this.state.title;
    collection.ingredients = `${this.state.ingredient1
      + ',' + this.state.ingredient2 + ',' +
      this.state.ingredient3}`;
    collection.image = this.state.image;
    postRecipe(collection);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={{ fontSize: 30, textAlign: 'center', paddingBottom: 30 }}>Add your recipe</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          maxLength={20}
          onChangeText={title => this.setState({ title: title })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingredient 1"
          maxLength={20}
          onChangeText={text => this.setState({ ingredient1: text })}

        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingredient 2"
          maxLength={20}
          onChangeText={ingredient2 => this.setState({ ingredient2: ingredient2 })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingredient 3"
          maxLength={20}
          onChangeText={image => this.setState({ ingredient3: image })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Image URL"
          maxLength={20}
          onChangeText={image => this.setState({ image: image })}
        />
        <TouchableOpacity
          style={styles.saveRecipeButton}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.saveRecipeButtonText}>Save Recipe</Text>
        </TouchableOpacity>
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  saveIngredientButton: {
    borderWidth: 1,
    // borderColor: '#007BFF',
    backgroundColor: '#ffd800',
    padding: 4,
    margin: 2,
    borderRadius: 12,
  },
  saveIngredientButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  saveRecipeButton: {
    borderWidth: 1,
    backgroundColor: '#ffd800',
    padding: 15,
    margin: 5
  },
  saveRecipeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});
