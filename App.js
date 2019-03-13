import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Text style={estilos.texto}>Olá mundo criado por Deus!</Text>
    );
  }
}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 30,
    fontSize: 25
  }
});
