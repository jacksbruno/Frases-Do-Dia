import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const gerarFrase = () => {
  alert('Gerar Frase Randômica')
};

export default class App extends Component {
  render() {  
    return (
      <View style={estilos.Principal}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity onPress={gerarFrase} style={estilos.botao}>
          <Text style={estilos.texto}>Ver Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  Principal: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    padding: 10,
    backgroundColor: '#538530',
    marginTop: 15
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
