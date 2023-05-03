import React,{Component} from 'react'
import { StyleSheet, SafeAreaView, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Appbar } from 'react-native-paper'

import PaginaInicial from './src/app/paginaInicial/index'
import DetalhesJogos from './src/app/paginaInicial/jogos/detalhes/index'
import barraSuperior from './src/app/paginaInicial/barraSuperior';

const Stack = createStackNavigator()


export default function App({ navigation }) {

  function MenuJogo() {
    return(

      <View>

        <Appbar.Header>

          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action  icon="dots-vertical" onPress={() => {}} />

        </Appbar.Header>

      </View>

    )
  }

    return (

        <NavigationContainer>

          <Stack.Navigator>
            
            <Stack.Screen name="PáginaInicial" component={PaginaInicial} />
            <Stack.Screen name="DetalhesJogos" component={DetalhesJogos} BackAction={true} />

          </Stack.Navigator>  

        </NavigationContainer>
    );
}

const  estilos =  StyleSheet.create ({
  constainer: {
    flex: 1
  }
  
})