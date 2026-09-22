import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './src/componentes/header';
import Search from './src/componentes/search';
import Banner from './src/componentes/banner';
import Movies from './data/movies';
import CardMovies from './src/componentes/cardMovies';
import Rotas from './src/componentes/rotas'

export default function App() {
  return (

    <Rotas></Rotas>

  );
};

const styles = StyleSheet.create ({

  container: {
    flex: 1,
    alignItems: "center",
  },

  containerFilmes:{
    paddingTop:20,
    paddingBottom:16,
    paddingRight:16,
    width:140,
    heigh:28
  },

  titulo:{
    color: '#fff',
    fontSize:12,
    paddingTop:8  
  },

  textNota:{
    fontSize:10,
    color:'#fff',
    paddingLeft:4
  },

  images:{
    width:'100%',
    height:170,
    borderRadius: 8,     
  }

});