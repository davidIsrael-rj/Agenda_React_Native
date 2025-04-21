import React, { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DadosContext } from "../contexts/GlobalState";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    const [transacao, setTransacao] = useContext(DadosContext)

    const setAsyncStorage = async (data) =>{
        try{
            await AsyncStorage.setItem("transacao", JSON.stringify(data))
        }catch(e){
            console.log(e)
        }
    }

    const addPessoa = async ()=>{
        const id = transacao.length > 0 ? transacao[transacao.length - 1].id + 1 : 1;
        const newTransacao = {id, ...form}
        const updatedTransacao = [...transacao, newTransacao]
        setTransacao(updatedTransacao)
        setForm(initialForm)
        await setAsyncStorage(updatedTransacao)
        Alert.alert(`Pessoa foi adicionada com sucesso!`)
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
                style={styles.input}
                value={form.nome}
                onChangeText={(text) => setForm({...form, nome: text})} />
                <Text>CPF</Text>
                <TextInput style={styles.input}
                 value={form.cpf}
                 onChangeText={(text) => setForm({...form, cpf: text})} />
                <Text>RG</Text>
                <TextInput style={styles.input}
                 value={form.rg}
                 onChangeText={(text) => setForm({...form, rg: text})} />
                <Text>Data Nascimento</Text>
                <TextInput style={styles.input}  
                value={form.DtNas}
                onChangeText={(text) => setForm({...form, DtNas: text})} />
                <Text>Telefone</Text>
                <TextInput style={styles.input} 
                 value={form.Tel}
                 onChangeText={(text) => setForm({...form, Tel: text})} />
                <View>
                    <View style={styles.subTituloContainer}>
                        <Text style={styles.SubTituloText}>Endereço</Text>
                    </View>
                    <View>
                        <Text>Rua</Text>
                        <TextInput style={styles.input} 
                         value={form.rua}
                         onChangeText={(text) => setForm({...form, rua: text})} />
                    </View>
                    <View>

                        <Text>Bairro</Text>
                        <TextInput style={styles.input} 
                         value={form.bairro}
                         onChangeText={(text) => setForm({...form, bairro: text})} />
                    </View>
                    <View>
                        <Text>CEP</Text>
                        <TextInput style={styles.input} 
                         value={form.cep}
                         onChangeText={(text) => setForm({...form, cep: text})} />
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