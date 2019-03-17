import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

const gerarFrase = () => {
  let indice = Math.random();
  indice = Math.floor(indice * 7);
  const frase = ['Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar". "Josué 1:9"', 'O Senhor te abençoe e te guarde; o Senhor faça resplandecero seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz. "Números 6:24-26"', 'Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo "João 16:33"', 'Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal. "Mateus 6:34"', 'Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe "Mateus 19:6"', 'Tudo posso naquele que me fortalece. "Filipenses 4:13"', 'Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. "João 3:16"'];
  const fraseEscolhida = frase[indice];
  Alert.alert(fraseEscolhida);
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
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#538530',
    marginTop: 15
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
