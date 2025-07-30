// Importa o componente Svg e Path da biblioteca do react-native-svg para serem usados no projeto

import Svg, { Path } from 'react-native-svg';

// Exporta ícone de opções
export const IconOptions = () => {
    return (
        <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <Path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
        </Svg>
    )
}

// Exporta ícone de lixeira
export const IconDelete = () => {
    return (
        <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <Path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
        </Svg>
    )
}

