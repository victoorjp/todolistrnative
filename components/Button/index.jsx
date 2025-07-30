// Componente Button que exibe um botão customizado com texto "Adicionar"
// Recebe a prop:
// -OnPress: função chamada quando o botão é pressionado

import { Pressable, StyleSheet, Text } from "react-native"

export const Button = ({OnPress}) => {
    return(
        <Pressable style={style.button} onPress={OnPress}><Text style={style.buttonText}>Adicionar</Text></Pressable>
    )
}

const style = StyleSheet.create({
    button: {
    backgroundColor: '#ceaa6b80',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 32,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#000',
  },
})