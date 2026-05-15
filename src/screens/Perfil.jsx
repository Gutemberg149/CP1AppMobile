import { StyleSheet, Button, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>
    </SafeAreaView>
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
  },
});