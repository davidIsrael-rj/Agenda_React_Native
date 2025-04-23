import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DadosContext } from "../contexts/GlobalState";
import { useNavigation } from "@react-navigation/native";


export default function DadosPessoas(props) {
    
    const navigation = useNavigation()
    const [transacao, setTransacao] = useContext(DadosContext)
    useEffect(() => {
        console.log("Transacao atualizada:", transacao);
    }, [transacao]);


    const removerPessoa = async (id) => {
        try {
            const transacaoStorage = await AsyncStorage.getItem("transacao");
            const transacaoArray = JSON.parse(transacaoStorage);
            const novaTransacao = transacaoArray.filter((item) => item.id !== id);
            setTransacao(novaTransacao);
            await AsyncStorage.setItem("transacao", JSON.stringify(novaTransacao));
        } catch (e) {
            console.log(e);
        }
    };

    const atualizarPessoa = () => {
        navigation.navigate('Adicionar', {
            pessoa:{
                id: props.id,
                nome: props.nome,
                cpf: props.cpf,
                rg: props.rg,
                DtNas:props.DtNas,
                Tel: props.Tel,
                rua: props.rua,
                bairro: props.bairro,
                cep: props.cep,
            }
        }
    )}
    return (
        <TouchableOpacity
            // onPress={() => removerPessoa(props.id)}>
            onPress={atualizarPessoa}>
            <View key={props.id} style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textNome}>{props.nome}</Text>
                </View>
                <View style={styles.dados}>
                    <Text>ID:{props.id}</Text>
                    <Text>CPF:{props.cpf}, RG:{props.rg}</Text>
                    <Text>Data Nascimento: {new Date(props.DtNas).toLocaleDateString("pt-BR")}</Text>
                    <Text>Telefone: {props.Tel}</Text>
                    <Text>Endereço:{props.rua}, {props.bairro}, CEP:{props.cep} </Text>
                </View>
            </View>
        </TouchableOpacity>
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
    },
    textNome: {
        fontSize: 25,
        fontWeight: "bold"
    },
    header: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    dados: {
        flex: 1,
    }


})