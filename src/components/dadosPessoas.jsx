import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DadosContext } from "../contexts/GlobalState";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shadow } from "react-native-shadow-2";
import { Dimensions } from "react-native";


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
                DtNas: props.DtNas.toISOString(),//convertendo a data para string
                Tel: props.Tel,
                rua: props.rua,
                bairro: props.bairro,
                cep: props.cep,
            }
        }
        )

    }

    const {width} = Dimensions.get('window')
    return (
        <Shadow
            distance={15}     // intensidade da sombra
            offset={[40, 40]}    // deslocamento da sombra (6 pra direita, 2 pra baixo)
            startColor={'rgba(0,0,0,0.2)'} // cor da sombra
            radius={10}        // arredondamento da borda da sombra
            size={[width * 0.5, 2]} // 👈 largura e altura da sombra menores que o card
            style={{
                width: width * 0.98, //  90% da tela
                alignSelf: 'center', // Centraliza o card
                marginVertical: 10,  // margem só em cima e embaixo
            }}
        >

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
                            style={styles.botao}>
                            <Icon name={'account-edit-outline'} size={35} color={"#000"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => removerPessoa(props.id)}
                            style={styles.botao}>
                            <Icon name={"account-minus-outline"} size={35} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </Shadow>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
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
    },
    containerDB: {
        flexDirection: "row"
    },
    containerB: {
        alignContent: "center",
        justifyContent: "center"

    },
    botao: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 25,
        margin: 10,


    }


})