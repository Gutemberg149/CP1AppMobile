<!-- # App de Cadastro

Aplicativo simples em React Native para cadastro e exibição de dados do usuário.

## Funcionalidades

- Formulário com campos:
  - Nome
  - Curso
  - Disciplina
  - Descrição
- Fundo com gradiente
- Exibição dos dados em formato de cartão
- Botão para mostrar/ocultar os dados cadastrados

## Tecnologias

- React Native
- Expo
- react-native-safe-area-context
- expo-linear-gradient

## Link GitHub

https://github.com/Gutemberg149/CP1AppMobile

## Link Video

https://vimeo.com/manage/videos/1175755764 -->
# Aplicativo de Cadastro Acadêmico

Esse é um aplicativo mobile desenvolvido em React Native utilizando o ecossistema Expo. O projeto foi estruturado com foco em boas práticas de design e arquitetura de dados, oferecendo fluxos de cadastro de alunos, persistência de estados globais, integração com serviços externos de localização (API ViaCEP) e controle de acesso a recursos nativos de hardware (Câmera).

---

## 🚀 Funcionalidades Principais

* **Formulário de Cadastro Completo:** Captura de Nome, Curso, Disciplina e uma descrição personalizada do perfil do usuário.
* **Integração com API Externa:** Consulta automatizada de endereço por meio da API ViaCEP ao digitar um CEP válido de 8 dígitos.
* **Gerenciamento de Estado Global:** Uso avançado de Context API (`UserContext`) para compartilhar os dados cadastrados de forma imediata entre múltiplos módulos e telas do sistema.
* **Controle Nativo de Hardware:** Integração com a câmera do dispositivo móvel para captura e atualização da foto de perfil.
* **Tratamento Ativo de Permissões:** Validação obrigatória e ativa das diretrizes de privacidade do sistema operacional toda vez que a câmera é acionada.
* **Interface Consistente e Fluida:** Navegação em abas (`Bottom Tabs Navigator`) com ícones centralizados e estilização moderna baseada em gradientes lineares.

---

## 🛠️ Tecnologias Utilizadas

* **React Native** & **Expo** (SDK Atualizada)
* **React Navigation** (`@react-navigation/bottom-tabs` & `@react-navigation/native`)
* **Expo Camera** (Hook `useCameraPermissions` para controle de privacidade)
* **Expo Linear Gradient** (Fundo estilizado)
* **Expo Vector Icons** (Biblioteca de ícones `Feather`)

---

## 🎥 Link do video 
* 

## 👥 Equipe de Desenvolvimento (Devs)

O projeto foi planejado, projetado e codificado por:

* **Gutemberg Rocha** — *RM 562267*
* **Gustavo Sartori** — *RM 561650*

---

## 📦 Como Executar o Projeto

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados em sua máquina.
2. Clone o repositório do projeto.
3. No terminal, acesse a pasta raiz e instale as dependências:
   ```bash
   npm install

