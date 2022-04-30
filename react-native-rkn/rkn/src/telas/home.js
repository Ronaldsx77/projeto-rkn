import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, FlatList, Linking, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import Avaliar from "../avaliar/avaliar"
const images = [
  'https://occ-0-420-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUK1d6vh8B5B0xfmTuo00jV38JnuApYHtx7MQCiznR3pfTU-rKyzj3Un6jAxfkyi8bKs53Q52xOVQZVQpuKmD1vqUDs.jpg?r=f78',
  'https://occ-0-420-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdEQJII2vcAZo7ORWWLrC2l_J9umGPUazIWjN5edzHuXkQPsRcYXA6YcNYTfnp-I0gXZghrUxp3v5QAjxvtwFIyBT2E.jpg?r=93f',
  'https://occ-0-420-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbbLvEybvYnbvjoV2wWxzv9Ng64X_NokpLCuBEj98-lfApZc47q46UfAGdlsDcR0pSvhtxe1ezNMNeavH-tOw7BCF0A.jpg?r=cd8'
]

const WIDTH = Dimensions.get('window').width
const HEIGTH = Dimensions.get('window').height

export default function Home ({navigation}) {

  const [movies, setMovies] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [filmesPremiados, setFilmesPremiados] = useState([]);
  const [filmesAnimacoes, setFilmesAnimacoes] = useState([]);
  const [filmesAcao, setFilmesAcao] = useState([]);
  const [filmesAnimes, setFilmesAnimes] = useState([]);

  const filmPre = [
    { id:1, img: require('../img/FilmPre/joker.webp') },
    { id:2 ,img: require('../img/FilmPre/rocky.webp') },
    { id:3,img: require('../img/FilmPre/silencio.webp') },
  ];
  const animacoes = [
    {  id:1, img: require('../img/Series/BB.jpg') },
    {  id:2, img: require('../img/Series/99.jpg') },
    {  id:3, img: require('../img/Series/vikings.jpg') },
  ];
  const filAcao = [
    {  id:1, img: require('../img/FilmAc/merce.jpg') },
    {  id:2, img: require('../img/FilmAc/noLI.jpg') },
    {  id:3, img: require('../img/FilmAc/lucy.jpg') },
  ];
  const animes = [
    {  id:1,img: require('../img/animes/cowboyBebop.jpg') },
    {  id:2,img: require('../img/animes/bleach.jpg') },
    {  id:3,img: require('../img/animes/deathNote.jpg') },
  ];

  const getMovies = async () => {
    try {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','http://192.168.1.104:3000');

      const response = await fetch(`http://192.168.1.104:3000/rkn`,{
        mode: 'cors',
        method: 'GET',
        headers:headers
      });
      const jsonResponse = await response.json();
      setMovies(jsonResponse);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  useEffect(async () => {
    await getMovies();

    //setFilmesAcao(movies.filter(f => f.tipo = 'acao'));
  },[]);

  // useEffect( () => {
  //   console.log("oioioio");
  //   fetch('http://localhost:3000/rkn').then(
  //     response => {
  //       console.log(JSON.stringify(response));
  //     }
  //   )

  // },[]);

  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if(slide != imgActive){
        setimgActive(slide)
      }
    }
  }
  
  return (
    <ScrollView style={styles.container}>

    {/* <SafeAreaView>
      <View style={styles.wrap}>
        <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}>
          {
            images.map((e,index) =>
              <Image 
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: e}}
              />
            )
          }
        </ScrollView>
        <View style={styles.wrapDot}>
          {
            images.map((e,index) =>
              <Text key={0} style={imgActive == index ? styles.dotActive : styles.dot}> 
                &#x25cf;
              </Text>
            )
          }
        </View>
      </View>
    </SafeAreaView> */}
    
      <View>
      <Text style={styles.titulo}>Filmes Premiados</Text>
      <FlatList
        horizontal
        data={filmPre}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('Avaliar', {id: item.id})} >
            <Image style={styles.img} source={item.img} />
          </TouchableOpacity>;
        }}
      />
    </View>

    <View>
      <Text style={styles.titulo}>Séries</Text>
      <FlatList
        horizontal
        data={animacoes}
        renderItem={({ item }) => {
          return <TouchableOpacity><Image style={styles.img} source={item.img} /></TouchableOpacity>;
        }}
      />
    </View>

    <View>
      <Text style={styles.titulo}>Filmes de Ação</Text>
      <FlatList
        horizontal
        data={filAcao}
        renderItem={({ item }) => {
          return <TouchableOpacity><Image style={styles.img} source={item.img} /></TouchableOpacity>;
        }}
      />
    </View>

    <View>
      <Text style={styles.titulo}>Animes</Text>
      <FlatList
        horizontal
        data={animes}
        renderItem={({ item }) => {
          return <TouchableOpacity><Image style={styles.img} source={item.img} /></TouchableOpacity>;
        }}
      />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161A1D",
    flex: 1,
  },
  img: {
    resizeMode: "stretch",
    marginLeft: 10,
    height: 160,
    width: 230,
  },
  titulo: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
    padding: 15,
  },
  wrap: {
    width: WIDTH,
    height: HEIGTH * 0.30,
    
  },
  wrapDot:{
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center"
  },
  dotActive: {
    margin: 3,
    color: '#ff4d6d'
  },
  dot: {
    margin: 3,
    color: 'white'
  },
});