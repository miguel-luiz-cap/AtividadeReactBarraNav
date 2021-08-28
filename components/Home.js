import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function Home() {
  return(
    <View style={estilo.container}>
      <Fontisto name="smiley" size={200} color="#F5F" />
      <Text style={estilo.titulo}> 
      Bem vindo ao APP de Listas de coisas. Veja alguma lista clicando 
      na barra de navegação abaixo </Text>
      
      
    </View>

  );
}
const estilo = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#000',
  
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFF',
    padding: 20,
    //backgroundColor: '#FF3A00',
    fontWeight: 'bold',
    //shadowColor: '#FF0000',
    textShadowColor: '#FF00FF',
    textShadowRadius: 30,
  },
})