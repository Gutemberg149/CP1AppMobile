import React, { useContext } from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";


import { UserContext } from "../contexts/UserContext";

export default function Dev() {
  
  const { userData } = useContext(UserContext);

  return (
    <LinearGradient colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          <Text style={styles.titulo}>Equipe de Devs</Text>

          
          {userData.nome ? (
            <View style={styles.miniCadastroCard}>
              <Text style={styles.miniTitulo}>Cadastrado</Text>
              <View style={styles.miniFlex}>
                <Image
                  style={styles.miniFoto}
                  source={{
                    uri:
                      userData.foto ||
                      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh0dmtvd3RhcnluaXplcWVkZjE3MnJ1dWp3MXczY2RxZWxrMWJ6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1rzHSymOFmy0Do1Mb0/giphy.webp",
                  }}
                />
               
                <View style={styles.miniInfoBox}>
                  <Text style={styles.miniValor}>
                    <Text style={styles.miniLabel}>NOME: </Text>
                    {userData.nome}
                  </Text>

                  <Text style={styles.miniValor}>
                    <Text style={styles.miniLabel}>CURSO: </Text>
                    {userData.curso || "Não informado"}
                  </Text>

                  <Text style={styles.miniValor}>
                    <Text style={styles.miniLabel}>DISCIPLINA: </Text>
                    {userData.disciplina || "Não informado"}
                  </Text>

               
                  {userData.cep ? (
                    <Text style={styles.miniValor}>
                      <Text style={styles.miniLabel}>CEP: </Text>
                      {userData.cep}
                    </Text>
                  ) : null}

                 
                  {userData.endereco ? (
                    <Text style={styles.miniValorEnd}>
                      <Text style={styles.miniLabel}>ENDEREÇO: </Text>
                      {userData.endereco}
                    </Text>
                  ) : null}

                  <Text style={styles.miniValorDesc}>
                    <Text style={styles.miniLabel}>DESCRIÇÃO: </Text>
                    {userData.descricao || "Não informado"}
                  </Text>
                </View>
              </View>
            </View>
          ) : null}

   
          <View style={styles.devCard}>
            <Image style={styles.imageFoto} source={require("../../assets/devsPhotos/Gutemberg.jpeg")} />
            <View style={styles.infoBox}>
              <Text style={styles.label}>NOME:</Text>
              <Text style={styles.valor}>Gutemberg Rocha</Text>
              <Text style={styles.label}>RM:</Text>
              <Text style={styles.valor}>562267</Text>
            </View>
          </View>

     
          <View style={styles.devCard}>
            <Image style={styles.imageFoto} source={require("../../assets/devsPhotos/Gustavo.jpg")} />
            <View style={styles.infoBox}>
              <Text style={styles.label}>NOME:</Text>
              <Text style={styles.valor}>Gustavo Sartori</Text>
              <Text style={styles.label}>RM:</Text>
              <Text style={styles.valor}>561650</Text>
            </View>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    backgroundColor: "#946EC2",
    borderRadius: 12,
    padding: 10,
    textAlign: "center",
    overflow: "hidden",
  },
  devCard: {
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#946EC2",
  },
  imageFoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "white",
  },
  infoBox: {
    width: "100%",
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 12,
    padding: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "darkblue",
    marginBottom: 2,
  },
  valor: {
    fontSize: 18,
    color: "#1f2937",
    fontWeight: "bold",
    marginBottom: 10,
  },
  miniCadastroCard: {
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 15,
    padding: 12,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: "#946EC2",
  },
  miniTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#946EC2",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 10,
    overflow: "hidden",
  },
  miniFlex: {
    flexDirection: "row",
    alignItems: "flex-start", 
  },
  miniFoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 15,
    marginTop: 5, 
  },

  miniInfoBox: {
    flex: 1,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 8,
    padding: 8,
  },
  miniValor: {
    fontSize: 13,
    color: "#1f2937",
    fontWeight: "bold",
    marginBottom: 6, 
  },
  miniValorEnd: {
    fontSize: 11,
    color: "#1f2937",
    fontWeight: "600",
    marginBottom: 6, 
  },
  miniValorDesc: {
    fontSize: 12,
    color: "#4b5563",
    marginBottom: 4, 
  },
  miniLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "darkblue",
    marginTop: 4,
  },
  miniValor: {
    fontSize: 13,
    color: "#1f2937",
    fontWeight: "bold",
  },
  miniValorEnd: {
    fontSize: 11,
    color: "#1f2937",
    fontStyle: "italic",
    fontWeight: "600",
  },
  miniValorDesc: {
    fontSize: 12,
    color: "#4b5563",
  },
});
