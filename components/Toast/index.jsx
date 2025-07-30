// Componente que exibe uma mensagem temporária na tela como feedback de ação
// Recebe duas props:
// -showToast: booleano que indica se o toast deve ser exibido ou não
// -toastMessage: string com a mensagem que será mostrada no toast

import { StyleSheet, Text, View } from "react-native";


export const Toast = ({ showToast, toastMessage }) => {

     // Se showToast for falso, não renderiza nada, retorna null
    if (!showToast) return null;

    return (
        <View style={style.toast}>
            <Text style={style.toastText}>{toastMessage}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    toast: {
        position: 'absolute',
        bottom: 60,
        width: '80%',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#ceaa6b26',
        borderWidth: 1,
        borderColor: '#1d170e26',
        borderRadius: 10,
        alignItems: 'center',
    },

    toastText: {
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 16,
    }
})