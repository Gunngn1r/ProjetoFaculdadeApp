import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const salvar = async () => {
    await AsyncStorage.setItem('nome', texto);
    setResultado('Salvo com sucesso!');
  };

  const recuperar = async () => {
    const valor = await AsyncStorage.getItem('nome');
    if (valor !== null) {
      setResultado('Valor recuperado: ' + valor);
    } else {
      setResultado('Nada foi salvo ainda');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo AsyncStorage</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Salvar" onPress={salvar} />
      <View style={styles.espaco} />
      <Button title="Recuperar" onPress={recuperar} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  espaco: {
    height: 12,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
