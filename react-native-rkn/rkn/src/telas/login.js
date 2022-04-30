import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Login({navigation}) {
  return(
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../img/logo.png')}/>
      
        <TextInput
            style={styles.input}
            placeholder='Email ou número de telefone'
            placeholderTextColor="#6c757d"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />

        <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor="#6c757d"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
           
        />

        <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('BottomTabs')}>
            <Text style={styles.submitButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.link} onPress = {() => {Linking.openURL('https://www.youtube.com')}}>Crie sua conta</Text>
        <Text style={styles.EsqSen} onPress = {() => {Linking.openURL('https://www.youtube.com')}}>Esqueceu a senha ?</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161A1D",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
    logo: {
        resizeMode: "stretch",
        height: 170,
        width: 160,
        margin: 30,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        margin: 15,
        height: 40, 
        width: 300,
    },
    submitButton: {
        backgroundColor: '#ff4d6d',
        borderRadius: 7,
        padding: 10,
        width: 300,
        margin: 15,
        height: 40,
      },
    submitButtonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: 'white',
        fontSize: 18,
      },
      EsqSen: {
        fontWeight: "bold",
        marginTop: 10,
        color: "white",
      },
      link: {
        textDecorationLine: "underline",
        color: "white",
      },
   });
   