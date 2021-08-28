import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Home from './Home';
import ListaFilmes from './ListaFilmes';
import ListaJogos from './ListaJogos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#FFFF00',
        activeBackgroundColor: '#F0F',
      }}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' },
      }}>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Lista de Jogos"
        component={ListaJogos}
        options={{
          tabBarLabel: 'Lista de Jogos',
          title: 'Lista de Jogos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="gamepad-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lista de Filmes"
        component={ListaFilmes}
        options={{
          tabBarLabel: 'Lista de Filmes',
          title: 'Lista de Filmes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
