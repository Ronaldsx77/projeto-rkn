import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Lista () {
  return (
    <View style={styles.container}>

        <View style={styles.button}>
          <Image style={styles.img} source = {require('../img/FilmAc/lucy.jpg')} />
          <View>
            <Text style={styles.text}>Lucy</Text>
            <Text style={styles.text}>1h 30min</Text>
            <Text style={styles.text}>2014</Text>
          </View>
        </View>

        <View style={styles.button}>
          <Image style={styles.img} source = {require('../img/Series/BB.jpg')} />
          <View>
            <Text style={styles.text}>Bleach</Text>
            <Text style={styles.text}>10 temporadas</Text>
            <Text style={styles.text}>2004</Text>
          </View>
        </View>

        <View style={styles.button}>
          <Image style={styles.img} source = {require('../img/animes/bleach.jpg')} />
          <View>
            <Text style={styles.text}>Breaking Bad</Text>
            <Text style={styles.text}>5 temporadas</Text>
            <Text style={styles.text}>2008</Text>
          </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#161A1D",
    flexDirection: "column",
    flex: 1,
  },
  img:{
    resizeMode: "stretch",
    marginRight: 15,
    width: 220,
    height: 150,
  },
  text:{
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  button:{
    backgroundColor: "#121212",
    flexDirection: "row",
    marginTop: 15,
  }
})