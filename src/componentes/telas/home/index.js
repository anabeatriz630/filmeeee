import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../header';
import Search from '../../search';
import Banner from '../../banner';
import Movies from '../../../../data/movies';
import CardMovies from '../../cardMovies';

export default function Home() {
  return (

    <LinearGradient

      colors={['#010B19', '#1A1951', '#1E3A8A']} 
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      style={styles.container}

    >

      <Header></Header>
      <Search></Search>
      <Banner></Banner>

      <View style={{width:'90%'}}>

        <FlatList 

          showsVerticalScrollIndicator = {false}
          horizontal = {true}
          data = {Movies}
          keyExtractor = {(item)=> item.id}
          renderItem = {({item}) => (

          <CardMovies

            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota}

          />

          /*
          <TouchableOpacity style = {styles.containerFilmes}>
          
            <Image
              style = {styles.images} 
              source = {{uri: item.imagem}} 
            />

            <Text style = {styles.titulo}> {item.nome} </Text>

            <Text style = {styles.textNota}> {item.nota} </Text>

          </TouchableOpacity>
          */

        )}

        />

      </View>

    </LinearGradient>

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