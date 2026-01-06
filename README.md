# Lista To Do - React Native

Este projeto é uma aplicação de lista de tarefas (To-do) feita em React Native.

---

## Pré-requisitos

- Node.js (versão >= 18)
- npm ou yarn
- Expo CLI instalado globalmente (opcional, caso use Expo)

---

## Funcionalidades implementadas

* Adicionar tarefas
* Editar tarefas
* Deletar tarefas
* Feedback com mensagens toast
* Componentes Input e Button reutilizáveis
* Testes unitários da lógica de manipulação de itens
  
---

## Como configurar o ambiente

1. Clone o repositório

```bash
git clone https://github.com/victoorjp/todolistrnative.git
cd todolistrnative
```
2. Instale as dependências

```bash
npm install
# ou
yarn install
```

---

## Como executar o projeto

### Com expo

```bash
npm start
# ou
expo start
```
Após executar, escaneie o QR code com o app Expo Go no seu celular ou use um emulador.


### Com React Native CLI
* Android:

  ```bash
  npx react-native run-android
  ```

* iOS:
  
  ```bash
  npx react-native run-ios
  ```
---

## Gerando o build
### Com Expo
* Android:
  
  ```bash
  expo build:android
  ```
  
* iOS:
  
  ```bash
  expo build:ios
  ```
### Com React Native CLI
Siga as instruções oficiais do React Native para [Android](https://reactnative.dev/docs/signed-apk-android) e [iOS](https://reactnative.dev/docs/running-on-device).

---

## Rodando os testes
```bash
npm test
# ou
yarn test
```
Os testes cobrem as funções de adicionar, editar e deletar itens da lista.
