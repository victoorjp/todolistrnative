// Componente NoteItem representa um único item da lista de notas to do
// Exibe o texto do item e permite que o usuário edite ou delete o item
// O componente muda seu comportamento dependendo se o item está em modo de edição

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { IconDelete, IconOptions } from "../Icons";

export const NoteItem = ({
    item, // Objeto que representa o item da lista
    editingItemId, // Id do item atualmente em modo de edição
    editingText, // Texto que está sendo editado no momento
    setEditingText, // Função para atualizar o texto em edição
    setEditingItemId, // Função para definir qual item está sendo editado
    handlerEditItem, // Função para salvar a edição do item
    handlerDeleteItem, // Função para deletar o item
}) => {

    // Verifica se o item atual está sendo editado
    const isEditing = editingItemId === item.id;

    return (
        <View style={style.noteItem}>
            {isEditing ? (
                <TextInput
                    value={editingText}
                    onChangeText={setEditingText}
                    onSubmitEditing={() => handlerEditItem(item.id, editingText)}
                    autoFocus
                    style={[style.editInput, style.noteItemText]}
                />
            ) : (
                <Text style={style.noteItemText}>{item.text}</Text>
            )}

            {isEditing ? (
                <Pressable onPress={() => handlerDeleteItem(item.id)}>
                    <IconDelete />
                </Pressable>
            ) : (
                <Pressable
                    onPress={() => {
                        setEditingItemId(item.id);
                        setEditingText(item.text);
                    }}
                >
                    <IconOptions />
                </Pressable>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    noteItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 6,
    },

    noteItemText: {
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 18,
        maxWidth: '90%',
    },

    editInput: {
        width: '80%',
        backgroundColor: '#ceaa6b26',
        borderRadius: 32,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 18,
    },
})