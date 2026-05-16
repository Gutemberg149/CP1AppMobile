import { Text,View ,StyleSheet} from "react-native"


export default function DisplayDados({nome, curso, diciplina, descricao }) {
    return(
        <View style={styles.card}>
             <Text style={styles.cardTitle}>Dados Cadastrados</Text>
            <Text style={styles.infoContainer}>Nome: {nome||"Não informado"}</Text>
            <Text style={styles.infoContainer}>Curso: {curso||"Não informado"}</Text>
            <Text style={styles.infoContainer}>Diciplina: {diciplina||"Não informado"}</Text>
            <Text style={styles.AreaTextContainer}>Descrição: {descricao||"Não informado"}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    card: {
        width: "80%",
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#946EC2",

      },
        cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#946EC2",
        textAlign: "center",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#946EC2",
        },
        infoContainer: {
        flexDirection: "row",
        marginBottom: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e9ecef",
        color: "#1f2937",
         },
             AreaTextContainer: {
            flexDirection: "row",
            marginBottom: 12,
            height: 100,
            paddingVertical: 8,
            paddingHorizontal: 10,
            backgroundColor: "#f8f9fa",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#e9ecef",
            color: "#1f2937",
    }
})
 
