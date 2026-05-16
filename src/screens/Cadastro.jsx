import { StyleSheet, Button, Text, Image, TextInput, ScrollView, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import { useCameraPermissions } from "expo-camera";

import { UserContext } from "../contexts/UserContext";
import DisplayDados from "../components/displayDados";

export default function Cadastro({ navigation }) {
  const { userData, updateUserData } = useContext(UserContext);
  const [dadosParaCard, setDadosParaCard] = useState(null);

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    console.log("App carregado");
  }, []);

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

  const handleEnviar = () => {
    if (!userData.nome || !userData.curso) {
      Alert.alert("Aviso", "Preencha ao menos o nome e o curso.");
      return;
    }
    setDadosParaCard({ ...userData });
    Alert.alert("Sucesso", "Dados enviados! Verifique a aba Perfil.");
  };

  const handleAbrirCamera = async () => {
    let statusAtual = permission;

    if (!statusAtual) {
      const resposta = await requestPermission();
      statusAtual = resposta;
    }

    if (!statusAtual.granted) {
      const resultadoRequisicao = await requestPermission();

      if (resultadoRequisicao.granted) {
        navigation.navigate("Camera");
      } else {
        Alert.alert("Permissão Necessária", "Para tirar a foto de perfil, você precisa permitir o acesso à câmera.");
      }
    } else {
      navigation.navigate("Camera");
    }
  };

  return (
    <LinearGradient colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.imageLogo}
            source={{
              uri:
                userData.foto ||
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh0dmtvd3RhcnluaXplcWVkZjE3MnJ1dWp3MXczY2RxZWxrMWJ6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1rzHSymOFmy0Do1Mb0/giphy.webp",
            }}
          />

          <Text style={styles.titulo}>App para cadastro</Text>

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

          <TextInput
            placeholder="Digite o CEP (8 dígitos)"
            style={styles.input}
            keyboardType="numeric"
            maxLength={8}
            value={userData.cep}
            onChangeText={(txt) => {
              updateUserData({ cep: txt });
              if (txt.length === 8) buscarCep(txt);
            }}
          />

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

          <View style={{ marginBottom: 10, width: "80%" }}>
            <Button title="Abrir Câmera" onPress={handleAbrirCamera} color="#946EC2" />
          </View>

          <View style={{ width: "80%" }}>
            <Button title="Clique aqui para enviar" onPress={handleEnviar} color="#946EC2" />
          </View>

          {dadosParaCard && (
            <DisplayDados nome={dadosParaCard.nome} curso={dadosParaCard.curso} diciplina={dadosParaCard.disciplina} descricao={dadosParaCard.descricao} />
          )}
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
