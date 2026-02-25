import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App(){
  const[nome, setNome]= useState('');
  
  const handlePress= () => {
  alert('Botão clicado');
  };

  return(
    <SafeAreaView style={styles.container}>
    <Text>Digite seu nome:</Text>
    <TextInput
    style={styles.input}
    placeholder= "Seu nome aqui"
    value={nome}
    onChangeText={setNome}
    />
    <Button
    title="Clique aqui"
    onPress={handlePress} />
    </SafeAreaView>
  )}

const styles = StyleSheet.create({
  container: {padding: 20,},
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
  },
});
