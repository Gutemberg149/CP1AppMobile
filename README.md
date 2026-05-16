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
 https://vimeo.com/1192836564?share=copy&fl=sv&fe=ci

## 👥 Equipe de Desenvolvimento (Devs)

O projeto foi planejado, projetado e codificado por:

* **Gutemberg Rocha** — *RM 562267*
* **Gustavo Sartori** — *RM 561650*


