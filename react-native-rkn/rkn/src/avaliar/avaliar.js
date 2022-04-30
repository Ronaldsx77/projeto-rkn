import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Avaliar (props) {
  const id = props.route.params.id;


  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','http://192.168.1.104:3000');

      const response = await fetch(`http://192.168.1.104:3000/rkn/${id}`,{
        mode: 'cors',
        method: 'GET',
        headers:headers
      });
      const jsonResponse = await response.json();
      setMovie(jsonResponse);


   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  useEffect(async () => {
    await getMovie();
  },[]);

  return (
     
    <View style={styles.container}>
       {
         movie && 
       <Text>{movie.nome} {movie.ano} {movie.classificacao} {movie.temporadas} </Text>
       }
      
      {
        movie &&
        <Text>{movie.sinopse}</Text>
      }

      {
        movie &&
        <Image style={styles.img} source={{ uri: movie.img}}/>
      }
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
  },
  img: {
    width: 188,
    height: 136,
    resizeMode: "stretch",
    margin: 5,
  }
});