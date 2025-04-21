import { FlatList, StyleSheet, Text, View } from "react-native";
import DadosPessoas from "../components/dadosPessoas";
import { DadosContext } from "../contexts/GlobalState";
import { useContext } from "react";

export default function Lista() {
    const [transacao, setTransacao] = useContext(DadosContext)
    return (
            <View style={styles.constainer}>
                <FlatList
                    data={transacao}
                    keyExtractor={(_, index)=> String(index)}
                    renderItem={({ item}) => <DadosPessoas {...item}/>}
                    ListEmptyComponent={
                        <Text>Ainda não possui nenhum dados</Text>
                    }
                />
            </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        // marginEnd:5
    }
})