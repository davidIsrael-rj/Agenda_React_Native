import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DadosContext } from "../contexts/GlobalState";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function DadosPessoas(props) {

    const navigation = useNavigation()

    const [transacao, setTransacao] = useContext(DadosContext)

    // useEffect(() => {
    //     console.log("Transacao atualizada:", transacao);
    // }, [transacao]);


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
            pessoa: {
                id: props.id,
                nome: props.nome,
                cpf: props.cpf,
                rg: props.rg,
                DtNas: new Date(props.DtNas).toISOString(),//convertendo a data para string
                Tel: props.Tel,
                rua: props.rua,
                bairro: props.bairro,
                cep: props.cep,
            }
        }
        )

    }

    return (
        <View style={styles.card}>
            <View key={props.id} style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textNome}>{props.nome}</Text>
                </View>
                <View style={styles.containerDB}>
                    <View style={styles.dados}>
                        <Text>ID:{props.id}</Text>
                        <Text>CPF:{props.cpf}, RG:{props.rg}</Text>
                        <Text>Data Nascimento: {new Date(props.DtNas).toLocaleDateString("pt-BR")}</Text>
                        <Text>Telefone: {props.Tel}</Text>
                        <Text>Endereço:{props.rua}, {props.bairro}, CEP:{props.cep} </Text>
                    </View>
                    <View styles={styles.containerB}>
                        <TouchableOpacity
                            onPress={atualizarPessoa}
                            style={[styles.botao, {borderColor:"green"}]}>
                            <Icon name={'account-edit-outline'} size={20} color={"green"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => removerPessoa(props.id)}
                            style={[styles.botao, {borderColor:"red"}]}>
                            <Icon name={"account-minus-outline"} size={20} color={"red"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 1,
    },
    container: {
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        minHeight: 150,
        shadowColor: '#000000',
        shadowOffset: { width: 15, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
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
    },
    containerDB: {
        flexDirection: "row"
    },
    containerB: {
        alignContent: "center",
        justifyContent: "center"

    },
    botao: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 3,
        borderRadius: 20,
        margin: 10,


    }


})