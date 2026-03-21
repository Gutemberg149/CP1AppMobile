import { StyleSheet, Button, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DisplayDados from "./components/displayDados";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [mostrarDados, setMostrarDados] = useState(false);
  const [nome, setNome] = useState("");
  const [curso, setcurso] = useState("");
  const [diciplina, setDiciplina] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    console.log("App carregado");
  }, []);
  return (
    <LinearGradient colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.imageLogo}
          source={{
            uri: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh0dmtvd3RhcnluaXplcWVkZjE3MnJ1dWp3MXczY2RxZWxrMWJ6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1rzHSymOFmy0Do1Mb0/giphy.webp",
          }}
        />
        <Text style={styles.titulo}>App para cadastro</Text>

        <TextInput extInput placeholder="Digite seu nome" style={styles.input} maxLength={10} autoCapitalize="words" onChangeText={setNome} />
        <TextInput extInput placeholder="Digite o curso" style={styles.input} maxLength={10} autoCapitalize="words" onChangeText={setcurso} />
        <TextInput extInput placeholder="Digite a diciplina" style={styles.input} maxLength={10} autoCapitalize="words" onChangeText={setDiciplina} />
        <TextInput placeholder="Breve descrição" style={styles.textArea} multiline={true} numberOfLines={3} onChangeText={setDescricao} />
        <StatusBar style="auto" />

        <Button title="Clique aqui para enviar" onPress={() => setMostrarDados(!mostrarDados)} color="#946EC2" />

        {mostrarDados && <DisplayDados nome={nome} curso={curso} diciplina={diciplina} descricao={descricao} />}
        
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
  textArea: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
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
    borderColor: "#darkblue",
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
  },
});
