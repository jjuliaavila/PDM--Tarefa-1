import React, { useState } from 'react';
import { TextInput, Button, ScrollView, View, Text} from 'react-native';

export default function App() {
  const [itens, setItens] = useState([]);
  const [texto, setTexto] = useState('');

  const adicionarItens = () => {
  setItens([...itens, texto]);
  setTexto("");
};

return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}> lista dos itens</Text>
      
      <TextInput
        placeholder="Digite algum item"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      
      <Button title="Adicionar" onPress={adicionarItens} />

      <ScrollView style={{ marginTop: 20 }}>
        {itens.map((item, index) => (
          <Text key={index} style={{ padding: 10, backgroundColor: '#eee', marginTop: 5 }}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
