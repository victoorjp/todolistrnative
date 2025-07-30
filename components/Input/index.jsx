// Componente que representa um campo de texto customizado para entrada de dados
// Recebe as seguintes props:
// -value: string com o valor atual do input
// -onChangeText: função que atualiza o valor conforme o usuário digita

import { StyleSheet, TextInput } from "react-native";

export const Input = ({ value, onChangeText }) => {
    return (
        <TextInput style={style.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Escreva um item"
            maxLength={100}
          ></TextInput>
    )
}

const style = StyleSheet.create({
    input: {
    color: '#000',
    fontFamily: 'Roboto',
    backgroundColor: '#FFF',
    placeholderTextColor: '#9c9c9c',
    borderRadius: 32,
    padding: 12,
    fontSize: 18,
    width: '50%',
  },
})