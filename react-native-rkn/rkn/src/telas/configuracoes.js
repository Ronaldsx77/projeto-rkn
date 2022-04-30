import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import {Entypo, Feather} from '@expo/vector-icons'

export default function Configuracoes () {
  return (
    <View style = {styles.container}>
      <View style = {styles.logo}><Image style = {styles.img} source = {require('../img/logoIcon.png')}/></View>

      <View style = {styles.compartilhar}>

        <View style = {styles.shareTop}>
          <Entypo name="share" size={25} color={'white'}/>
          <Text style = {styles.text} >Compartilhar</Text>
        </View>

        <View style = {styles.share}>
          <TouchableOpacity>
            <Image style = {styles.icon} source = {require('../img/icons/whats.png')}/>
            <Text style={styles.shareText} >WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style = {styles.icon} source = {require('../img/icons/face.png')}/>
            <Text style={styles.shareText} >Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.teste}>
            <Image style = {styles.gmail} source = {require('../img/icons/gmail.png')}/>
            <Text style={styles.shareText} >Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.teste}>
            <Feather name="more-horizontal" size={33} color={'white'}/>
            <Text style={styles.shareText} >Mais</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      
      <Text style={styles.link}>Configurações do aplicativo</Text>
      <Text style={styles.link}>Conta</Text>
      <Text style={styles.link}>Ajuda</Text>
      <Text style={styles.link}>Sair</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161A1D',
    flex: 1,
  },
  logo: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  img: {
    resizeMode: "stretch",
    height: 170,
    width: 150,
  },
  compartilhar: {
    backgroundColor: '#393C41',
    flexDirection: "column",
    marginBottom: 20,
    marginLeft: 15,
    borderRadius: 5,
    width: 380,
    
  },
  shareTop: {
    flexDirection: "row",
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    color: 'white',
    marginLeft: 15,
    marginTop: 4,
  },
  share: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
  icon: {
    marginBottom: 5,
    marginLeft: 10,
    height: 40,
    width: 40,
  },
  shareText: {
    fontWeight: "bold",
    color: 'white',
    marginTop: 5
  },
  teste:{
    marginTop: 10
  },
  gmail: {
    marginBottom: 5,
    height: 30,
    width: 40,
  },
  link: {
    fontWeight: "bold",
    color: 'white',
    margin: 15,
    marginLeft: 30
  },
})