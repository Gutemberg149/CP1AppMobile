import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function Dev() {
  return (
    <LinearGradient colors={["#946EC2", "#a1c4fd", "#c2e9fb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          <Text style={styles.titulo}>Equipe de Devs</Text>

          {/* Card do Integrante 1 - Gutemberg */}
          <View style={styles.devCard}>
            <Image style={styles.imageFoto} source={require("../../assets/devsPhotos/Gutemberg.jpeg")} />
            <View style={styles.infoBox}>
              <Text style={styles.label}>NOME:</Text>
              <Text style={styles.valor}>Gutemberg Rocha</Text>
              <Text style={styles.label}>RM:</Text>
              <Text style={styles.valor}>562267</Text>
            </View>
          </View>

          {/* Card do Integrante 2 - Gustavo */}
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
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Fundo semi-transparente para dar elegância
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
    borderRadius: 70, // Círculo perfeito
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
});
