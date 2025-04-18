import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DadosPessoas(props) {
    return (
        <View key={props.id} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textNome}>{props.nome}</Text>
            </View>
            <View style={styles.dados}>
                <Text>CPF:{props.cpf}, RG:{props.rg}</Text>
                <Text>Data Nascimento: {props.dtnas}</Text>
                <Text>Telefone: {props.tel}</Text>
                <Text>Endereço:{props.rua}, {props.bairro}, CEP:{props.cep} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        minHeight: 150,
        width: "100%"
    },
    textNome: {
        fontSize: 25,
        fontWeight: "bold"
    },
    header:{
        marginBottom: 10,
        justifyContent: "center",
        alignItems:"center"
    },
    dados:{
        flex:1,
    }


})