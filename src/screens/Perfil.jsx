import React, { useContext } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";


import { UserContext } from "../contexts/UserContext";

export default function Perfil() {
  const { userData } = useContext(UserContext);

  return (
    <LinearGradient 
      colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0.5 }} 
      style={{ flex: 1 }}
    >
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          
          <Image
            style={styles.imagePerfil}
            source={{
              uri: userData.foto || "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh0dmtvd3RhcnluaXplcWVkZjE3MnJ1dWp3MXczY2RxZWxrMWJ6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1rzHSymOFmy0Do1Mb0/giphy.webp",
            }}
          />

          <Text style={styles.titulo}>Perfil do Aluno</Text>

          <View style={styles.infoBox}>
            <Text style={styles.label}>NOME:</Text>
            <Text style={styles.valor}>{userData.nome || "Não informado"}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>CURSO:</Text>
            <Text style={styles.valor}>{userData.curso || "Não informado"}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>DISCIPLINA:</Text>
            <Text style={styles.valor}>{userData.disciplina || "Não informado"}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>CEP:</Text>
            <Text style={styles.valor}>{userData.cep || "Não informado"}</Text>
          </View>

          <View style={styles.infoBoxEndereco}>
            <Text style={styles.label}>ENDEREÇO COMPLETO:</Text>
            <Text style={styles.valorEndereco}>{userData.endereco || "Endereço não localizado"}</Text>
          </View>

          <View style={styles.infoBoxDescricao}>
            <Text style={styles.label}>DESCRIÇÃO:</Text>
            <Text style={styles.valorDescricao}>{userData.descricao || "Sem descrição disponível."}</Text>
          </View>

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
    paddingVertical: 30,
  },
  titulo: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    backgroundColor: "#946EC2",
    borderRadius: 12,
    padding: 10,
    overflow: 'hidden', 
  },
  imagePerfil: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "white",
  },
  infoBox: {
    width: "85%",
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  infoBoxEndereco: {
    width: "85%",
    backgroundColor: "#f0f8ff", 
    borderWidth: 2,
    borderColor: "#946EC2",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  infoBoxDescricao: {
    width: "85%",
    minHeight: 100,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "darkblue",
    marginBottom: 4,
  },
  valor: {
    fontSize: 18,
    color: "#1f2937",
    fontWeight: "500",
  },
  valorEndereco: {
    fontSize: 14,
    color: "#1f2937",
    fontStyle: 'italic',
  },
  valorDescricao: {
    fontSize: 16,
    color: "#1f2937",
  },
});