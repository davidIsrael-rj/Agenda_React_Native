import { StyleSheet, Text, View } from "react-native";

export default function DadosPessoas(props) {
    return (
        <View key={props.id} style={styles.container}>
            <View>
                <Text style={styles.textNome}>{props.nome}</Text>
            </View>
            <View>
                <Text>{props.cpf}</Text>
                <Text>{props.rg}</Text>
                <Text>{props.dtnas}</Text>
                <Text>{props.tel}</Text>
                <Text>{props.rua}</Text>
                <Text>{props.bairro}</Text>
                <Text>{props.cep}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        margin:10,
        height:0,
        width: "100%"
    },
    textNome:{
        fontSize: 25,
        fontWeight:"bold"
    },
    

})