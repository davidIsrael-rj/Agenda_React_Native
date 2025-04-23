import React, { useContext, useEffect, useState } from "react";
import { Alert, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DadosContext } from "../contexts/GlobalState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useRoute } from "@react-navigation/native";



Icon.loadFont();

const initialForm = {
    // id:0,
    nome: "",
    cpf: "",
    rg: "",
    DtNas: new Date(),
    Tel: "",
    rua: "",
    bairro: "",
    cep: "",
}

export default function AddNome() {
    
    const route = useRoute();

    const [form, setForm] = useState(initialForm)
    const [transacao, setTransacao] = useContext(DadosContext)
    const [mostCalend, setMostCalend] = useState(false)

    useEffect(()=>{
        if (route.params?.pessoa){
            const pessoa = route.params.pessoa;
            const dtNas = new Date(pessoa.DtNas)
            setForm({
                ...pessoa,
                DtNas: dtNas
            })
        }
    },[route.params])


    const insData = (_, selectData) => {
        setMostCalend(false)
        if (selectData) {
            setForm({ ...form, DtNas: selectData })
        }
    }
    const setAsyncStorage = async (data) => {
        try {
            await AsyncStorage.setItem("transacao", JSON.stringify(data))
        } catch (e) {
            console.log(e)
        }
    }

    const addPessoa = async () => {
        const id = transacao.length > 0 ? transacao[transacao.length - 1].id + 1 : 1;
        const newTransacao = { id, ...form }
        const updatedTransacao = [...transacao, newTransacao]
        setTransacao(updatedTransacao)
        setForm(initialForm)
        await setAsyncStorage(updatedTransacao)
        Alert.alert(`Pessoa foi adicionada com sucesso!`)
    }

    const addPessoaUp = async () => {
        if (form.id > 0) {
          // Atualização
          const updatedTransacao = transacao.map((pessoa) => {
            if (pessoa.id === form.id) {
              return form;
            }
            return pessoa;
          });
          setTransacao(updatedTransacao);
          await setAsyncStorage(updatedTransacao);
          setForm(initialForm)
          Alert.alert(`Pessoa foi atualizada com sucesso!`);
        } else {
          // Adição
          const id = transacao.length > 0 ? transacao[transacao.length - 1].id + 1 : 1;
          const newTransacao = { id, ...form };
          const updatedTransacao = [...transacao, newTransacao];
          setTransacao(updatedTransacao);
          setForm(initialForm);
          await setAsyncStorage(updatedTransacao);
          Alert.alert(`Pessoa foi adicionada com sucesso!`);
        }
      };
      
      

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
                    onChangeText={(text) => setForm({ ...form, nome: text })} />
                <Text>CPF</Text>
                <TextInput style={styles.input}
                    value={form.cpf}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => setForm({ ...form, cpf: text })} />
                <Text>RG</Text>
                <TextInput style={styles.input}
                    keyboardType="decimal-pad"
                    value={form.rg}
                    onChangeText={(text) => setForm({ ...form, rg: text })} />

                <View>
                    <Text>Data Nascimento</Text>
                    <TouchableOpacity onPress={() => setMostCalend(true)}>
                        <TextInput
                            style={styles.input}
                            value={form.DtNas.toLocaleDateString("pt-BR")}
                            onChangeText={(text) => setForm({ ...form, DtNas: text })} 
                            editable={false}/>
                            
                    </TouchableOpacity>
                    {mostCalend && (
                        <RNDateTimePicker
                            mode="date"
                            display={Platform.OS === "ios" ? "inline" : "default"}
                            value={form.DtNas}
                            onChange={insData}
                        />
                    )}
                </View>

                <Text>Telefone</Text>
                <TextInput style={styles.input}
                    keyboardType="decimal-pad"
                    value={form.Tel}
                    onChangeText={(text) => setForm({ ...form, Tel: text })} />
                <View>
                    <View style={styles.subTituloContainer}>
                        <Text style={styles.SubTituloText}>Endereço</Text>
                    </View>
                    <View>
                        <Text>Rua</Text>
                        <TextInput style={styles.input}
                            value={form.rua}
                            onChangeText={(text) => setForm({ ...form, rua: text })} />
                    </View>
                    <View>

                        <Text>Bairro</Text>
                        <TextInput style={styles.input}
                            value={form.bairro}
                            onChangeText={(text) => setForm({ ...form, bairro: text })} />
                    </View>
                    <View>
                        <Text>CEP</Text>
                        <TextInput style={styles.input}
                            keyboardType="decimal-pad"
                            value={form.cep}
                            onChangeText={(text) => setForm({ ...form, cep: text })} />
                    </View>
                </View>
                <View style={styles.botaoContainer}>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={addPessoaUp}>
                        <Text style={styles.botaoText}>Adicionar</Text>
                        <Icon name="account-check" size={25} color={"#fff"} />
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
    botaoContainer: {
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    botaoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        paddingRight: 15
    },
    botao: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#000",
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})