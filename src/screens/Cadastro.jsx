// import { StyleSheet, Button, Text, Image, TextInput, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import DisplayDados from "../components/displayDados";
// import { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";

// import { LinearGradient } from "expo-linear-gradient";

// export default function Cadastro() {
//   const [mostrarDados, setMostrarDados] = useState(false);
//   const [nome, setNome] = useState("");
//   const [curso, setcurso] = useState("");
//   const [diciplina, setDiciplina] = useState("");
//   const [descricao, setDescricao] = useState("");

//   useEffect(() => {
//     console.log("App carregado");
//   }, []);

//   return (
//     <LinearGradient colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
//       <ScrollView>
//         <SafeAreaView style={styles.container}>
//           <Image
//             style={styles.imageLogo}
//             source={{
//               uri: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh0dmtvd3RhcnluaXplcWVkZjE3MnJ1dWp3MXczY2RxZWxrMWJ6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1rzHSymOFmy0Do1Mb0/giphy.webp",
//             }}
//           />
//           <Text style={styles.titulo}>App para cadastro</Text>

//           <TextInput extInput placeholder="Digite seu nome" style={styles.input} maxLength={10} autoCapitalize="words" onChangeText={setNome} />
//           <TextInput extInput placeholder="Digite o curso" style={styles.input} maxLength={10} autoCapitalize="words" onChangeText={setcurso} />
//           <TextInput extInput placeholder="Digite a diciplina" style={styles.input} maxLength={10} autoCapitalize="words" onChangeText={setDiciplina} />
//           <TextInput placeholder="Breve descrição" style={styles.textArea} multiline={true} numberOfLines={3} onChangeText={setDescricao} />
//           <StatusBar style="auto" />

//           <Button title="Clique aqui para enviar" onPress={() => setMostrarDados(!mostrarDados)} color="#946EC2" />

//           {mostrarDados && <DisplayDados nome={nome} curso={curso} diciplina={diciplina} descricao={descricao} />}
//         </SafeAreaView>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   titulo: {
//     color: "white",
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 40,
//     backgroundColor: "#946EC2",
//     borderRadius: 12,
//     padding: 10,
//   },
//   textArea: {
//     height: 100,
//     borderColor: "gray",
//     borderWidth: 1,
//     padding: 10,
//     textAlignVertical: "top",
//   },
//   input: {
//     width: "80%",
//     height: 50,
//     backgroundColor: "lightblue",
//     borderWidth: 1,
//     borderColor: "darkblue",
//     borderRadius: 12,
//     marginBottom: 20,
//     fontSize: 16,
//     padding: 15,
//     color: "#1f2937",
//   },
//   textArea: {
//     width: "80%",
//     height: 100,
//     backgroundColor: "lightblue",
//     borderColor: "#darkblue",
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 15,
//     textAlignVertical: "top",
//     fontSize: 16,
//     color: "#1f2937",
//     marginBottom: 20,
//   },
//   imageLogo: {
//     width: 150,
//     height: 150,
//     marginBottom: 30,
//     borderRadius: 75,
//   },
// });
import { StyleSheet, Button, Text, Image, TextInput, ScrollView, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

// Importação do Contexto e Componentes
import { UserContext } from "../contexts/UserContext";
import DisplayDados from "../components/displayDados";

export default function Cadastro({ navigation }) {
  const { userData, updateUserData } = useContext(UserContext);
  const [mostrarDados, setMostrarDados] = useState(false);

  useEffect(() => {
    console.log("App carregado");
  }, []);

  // Função para buscar CEP
  const buscarCep = async (cep) => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          Alert.alert("Erro", "CEP não encontrado.");
        } else {
          const enderecoCompleto = `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
          updateUserData({ endereco: enderecoCompleto });
        }
      } catch (error) {
        Alert.alert("Erro", "Falha ao buscar endereço.");
      }
    }
  };

  return (
    <LinearGradient colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* Se houver foto no contexto, exibe ela, senão exibe a logo padrão */}
          <Image
            style={styles.imageLogo}
            source={{
              uri:
                userData.foto ||
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh0dmtvd3RhcnluaXplcWVkZjE3MnJ1dWp3MXczY2RxZWxrMWJ6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1rzHSymOFmy0Do1Mb0/giphy.webp",
            }}
          />

          <Text style={styles.titulo}>App para cadastro</Text>

          {/* Inputs originais atualizando o Contexto */}
          <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
            maxLength={20}
            autoCapitalize="words"
            value={userData.nome}
            onChangeText={(txt) => updateUserData({ nome: txt })}
          />

          <TextInput
            placeholder="Digite o curso"
            style={styles.input}
            autoCapitalize="words"
            value={userData.curso}
            onChangeText={(txt) => updateUserData({ curso: txt })}
          />

          <TextInput
            placeholder="Digite a disciplina"
            style={styles.input}
            autoCapitalize="words"
            value={userData.disciplina}
            onChangeText={(txt) => updateUserData({ disciplina: txt })}
          />

          {/* Novo campo de CEP com o mesmo estilo */}
          <TextInput
            placeholder="Digite o CEP (8 dígitos)"
            style={styles.input}
            keyboardType="numeric"
            maxLength={8}
            onChangeText={(txt) => {
              updateUserData({ cep: txt });
              if (txt.length === 8) buscarCep(txt);
            }}
          />

          {/* Exibição do endereço retornado pela API */}
          {userData.endereco ? (
            <View style={styles.enderecoContainer}>
              <Text style={styles.enderecoText}>Endereço: {userData.endereco}</Text>
            </View>
          ) : null}

          <TextInput
            placeholder="Breve descrição"
            style={styles.textArea}
            multiline={true}
            numberOfLines={3}
            value={userData.descricao}
            onChangeText={(txt) => updateUserData({ descricao: txt })}
          />

          <StatusBar style="auto" />

          {/* Botão para abrir a câmera */}
          <View style={{ marginBottom: 10, width: "80%" }}>
            <Button title="Abrir Câmera" onPress={() => navigation.navigate("Camera")} color="#946EC2" />
          </View>

          <View style={{ width: "80%" }}>
            <Button title="Clique aqui para enviar" onPress={() => setMostrarDados(!mostrarDados)} color="#946EC2" />
          </View>

          {mostrarDados && <DisplayDados nome={userData.nome} curso={userData.curso} diciplina={userData.disciplina} descricao={userData.descricao} />}
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  titulo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    backgroundColor: "#946EC2",
    borderRadius: 12,
    padding: 10,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
    padding: 15,
    color: "#1f2937",
  },
  textArea: {
    width: "80%",
    height: 100,
    backgroundColor: "lightblue",
    borderColor: "darkblue",
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#1f2937",
    marginBottom: 20,
  },
  imageLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#946EC2",
  },
  enderecoContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: "#946EC2",
  },
  enderecoText: {
    color: "#333",
    fontSize: 14,
  },
});
