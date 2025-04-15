import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();
export default props => (
    <ScrollView>

        <View style={styles.container}>
            <View>
                <View style={styles.subTituloContainer}>
                    <Text style={styles.SubTituloText}>Dados</Text>
                </View>
            </View>
                <Text>Nome</Text>
                <TextInput style={styles.input} />
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
            <View>

            </View>
        </View>
    </ScrollView>
)

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
    }
})