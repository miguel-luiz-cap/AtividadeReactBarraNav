import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, SourceSansPro_400Regular, SourceSansPro_700Bold } from '@expo-google-fonts/source-sans-pro';

const DadosJogos = [
  {
    uid: 1,
    filme: 'Cyberpunk 2077',
    ano: '2020',
    categoria: 'Ação/Mundo Aberto',
    img: 'https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png',
  },

  {
    uid: 2,
    filme: 'Resident Evil Village',
    ano: '2021',
    categoria: 'Ação/Terror',
    img:
      'https://cdn.awsli.com.br/600x450/1540/1540921/produto/95915585/3fefd7170f.jpg',
  },

  {
    uid: 3,
    filme: 'Super Mario Odyssey',
    ano: '2017',
    categoria: 'Aventura/Plataforma',
    img: 'https://upload.wikimedia.org/wikipedia/pt/9/99/Super_Mario_Odyssey_Capa.png',
  },

  {
    uid: 4,
    filme: 'Crash Bandicoot 4',
    ano: '2020',
    categoria: 'Aventura/Plataforma',
    img: 'https://bdjogos.com.br/capas/7631-crash-bandicoot-4-its-about-time-capa-1.jpg',
  },

  {
    uid: 5,
    filme: 'The Last of Us - Part 2',
    ano: '2019',
    categoria: 'Drama/Terror',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVS3TiS6BzlG0ZzNeQzochMt7ZsGdxzeUCQ&usqp=CAU',
  },

  {
    uid: 6,
    filme: "Mavel's Spider Man",
    ano: '2018',
    categoria: 'Ação/Mundo Aberto',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png',
  },

  {
    uid: 7,
    filme: 'God of War',
    ano: '2018',
    categoria: 'Ação/RPG',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png',
  },

  {
    uid: 8,
    filme: 'Grand Theft Auto 5',
    ano: '2013',
    categoria: 'Ação/Mundo aberto',
    img: 'http://s.glbimg.com/po/tt/f/original/2013/04/02/gta5-capa-rockstar_.jpg',
  },

  {
    uid: 9,
    filme: 'Sonic Forces',
    ano: '2017',
    categoria: 'Aventura/Plataforma',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/8/89/Sonic_Forces_capa.png',
  },

  {
    uid: 10,
    filme: 'Sonic Mania',
    ano: '2017',
    categoria: 'Aventura/Plataforma',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVku6-2_xVa0XQNvUUr6t09dA2gPe6j50n-g&usqp=CAU',
  },

  {
    uid: 11,
    filme: 'Cuphead',
    ano: '2017',
    categoria: 'Ação/Aventura',
    img: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/Cuphead_capa.png',
  },

  {
    uid: 12,
    filme: 'Call of Duty: Cold War',
    ano: '2021',
    categoria: 'FPS',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/8/8c/Black_Ops_Cold_War_capa.jpeg',
  },

  {
    uid: 13,
    filme: 'Control',
    ano: '2019',
    categoria: 'Ação',
    img: 'https://pbs.twimg.com/media/D1IOaN7WwAAJRw5.jpg',
  },

  {
    uid: 14,
    filme: 'Mortal Kombat XI',
    ano: '2019',
    categoria: 'Luta',
    img: 'https://upload.wikimedia.org/wikipedia/pt/2/21/Mortal_Kombat_11_capa.jpg',
  },
];

export default function ListaJogos() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Lista de Jogos </Text>
        <FlatList
          data={DadosJogos}
          keyExtractor={(item) => {
            item.uid.toString();
          }}
          renderItem={({ item }) => (
            <View style={estilo.blocos}>
              <Image
                resizeMode="contain"
                style={estilo.imagem}
                source={{ uri: item.img }}
              />
              <View style={estilo.textoFilme}>
                <Text style={estilo.textoCor}> <Text style={estilo.textoNegrito}>Nome:</Text> {item.filme} </Text>
                <Text style={estilo.textoCor}> <Text style={estilo.textoNegrito}>Ano de Lancamento:</Text> {item.ano} </Text>
                <Text style={estilo.textoCor}> <Text style={estilo.textoNegrito}>Categoria:</Text> {item.categoria} </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    textShadowRadius: 40,
    fontFamily: 'SourceSansPro_400Regular',
  },
  textoFilme: {
    //textAlign: 'left',
    //fontSize: 20,
    //color: '#FFF',
    //marginBottom: 30,
    marginLeft: 5,
    marginVertical: 10,
  
  },
  textoCor: {
    color: '#FFF',
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 16,
  },
  textoNegrito: {
    fontFamily: 'SourceSansPro_700Bold',
    color: '#FF0'
  },
  imagem: {
    width: 65,
    //height: 80,
    borderRadius: 10,
    //marginStart: 3,
    //marginBottom: 10,
  },
  blocos: {
    flexDirection: 'row',
    backgroundColor: '#660099',
    padding: 10,
    width: 300,
    //height: 80,
    marginVertical: 5,
    borderRadius: 20,   
  },
});
