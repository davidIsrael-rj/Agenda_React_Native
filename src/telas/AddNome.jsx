import React, { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

const initialForm = {
    nome: "",
    cpf: "",
    rg: "",
    DtNas: "",
    Tel: "",
    rua: "",
    bairro: "",
    cep: "",
}

export default function AddNome() {

    const [form, setForm] = useState(initialForm)

    const addPessoa = ()=>{
        Alert.alert(`Adicionando pessoas`)
    }

    return (

        <ScrollView>

            <View style={styles.container}>
                <View>
                    <View style={styles.subTituloContainer}>
                        <Text style={styles.SubTituloText}>Dados</Text>
                    </View>
                </View>
                <Text>Nome</Text>
                <TextInput 
                style={styles.input}/>
                <Text>CPF</Text>
                <TextInput style={styles.input} />
                <Text>RG</Text>
                <TextInput style={styles.input} />
                <Text>Data Nascimento</Text>
                <TextInput style={styles.input} />
                <Text>Telefone</Text>
                <TextInput style={styles.input} />
                <View>
                    <View style={styles.subTituloContainer}>
                        <Text style={styles.SubTituloText}>Endereço</Text>
                    </View>
                    <View>
                        <Text>Rua</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>

                        <Text>Bairro</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text>CEP</Text>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.botaoContainer}>
                    
                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={addPessoa}>
                        <Text style={styles.botaoText}>Adicionar</Text>
                        <Icon name="account-check" size={25} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10

    },
    input: {
        height: 44,
        paddingHorizontal: 16,
        borderColor: "#4f4f4f",
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1
    },

    subTituloContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    SubTituloText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    botaoContainer:{
        paddingTop: 10,
        justifyContent: "center",
        alignItems:"center"
    },
    botaoText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        paddingRight: 15
    },
    botao:{
        flex:1,
        flexDirection:"row",
        backgroundColor: "#000",
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})