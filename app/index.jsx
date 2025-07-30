import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { NoteItem } from "../components/NoteItem";
import { Toast } from "../components/Toast";


export default function Index() {

  // Lista de itens/tarefas do sistema
  const [items, setItems] = useState([]);

  // Titulo ou texto do item
  const [inputValue, setInputValue] = useState('');

  // Id do item
  const [nextId, setNextId] = useState(1);

  // Seleção de item para edição de texto
  const [editingItemId, setEditingItemId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Feedback de ações com toast
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);


  // Função de incremento de item à lista de tarefas
  const handlerAddItem = () => {

    // Criação do modelo de objeto da lista
    // Contém Id e o texto digitado
    const newItem = {
      id: nextId,
      text: inputValue,
    };

    // Se o texto não estiver vazio, prossiga
    if (newItem.text !== '') {

      // Acrescenta o novo item à lista de tarefas, limpa o campo de texto do input e
      // incrementa 1 ao ID atual
      setItems([...items, newItem]);
      setInputValue('');
      setNextId(nextId + 1);
      showToastMessage('Item adicionado!');
    }
  }

  // Função de edição e salvamento de item
  const handlerEditItem = (id, newText) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, text: newText } : item
    );

    // Atualiza o state com a nova lista de itens, limpa o ID do item que estava sendo
    // editado e limpa o campo de texto do input de edição
    setItems(updatedItems);
    setEditingItemId(null);
    setEditingText('');
    showToastMessage('Item editado!');
  }

  // Função de exclusão de item da lista
  const handlerDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    setEditingItemId(null);
    showToastMessage('Item deletado!');
  };

  // Função de exibição de mensagem rápida de feedback
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setToastMessage('');
    }, 3000);
  };


  return (
    <View style={style.container}>
      <View style={style.actions}>
        <Text style={style.title}>Lista To do</Text>

        <View style={style.header}>
          <Input
            value={inputValue}
            onChangeText={setInputValue}
          />

          <Button OnPress={handlerAddItem} />
        </View>


        <ScrollView style={style.notesContainer} contentContainerStyle={style.notesContentContainer}>
          {items.map(item => (
            <NoteItem
              key={item.id}
              item={item}
              editingItemId={editingItemId}
              editingText={editingText}
              setEditingText={setEditingText}
              setEditingItemId={setEditingItemId}
              handlerEditItem={handlerEditItem}
              handlerDeleteItem={handlerDeleteItem}
            />
          ))}
        </ScrollView>
      </View>

      <Toast
        showToast={showToast}
        toastMessage={toastMessage}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f2ef',
    alignItems: 'center',
  },

  actions: {
    gap: 40,
    margin: 60,
    width: '100%',
  },

  title: {
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  notesContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    minHeight: 500,
    maxHeight: 500,
    width: '80%',
    alignSelf: 'center',
    gap: 15,
  },

  notesContentContainer: {
    paddingBottom: 30,
  },
})