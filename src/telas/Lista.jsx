import { FlatList, ScrollView, Text, View } from "react-native";
import DadosPessoas from "../components/dadosPessoas";
import { DadosContext } from "../contexts/GlobalState";
import { useContext } from "react";

export default function Lista() {
    const [transacao, setTransacao] = useContext(DadosContext)
    return (
        <ScrollView>
            <View>
                <FlatList
                    data={transacao}
                    renderItem={({ item, index }) => <DadosPessoas {...item} id={parseInt(index + 1)} />}
                    ListEmptyComponent={
                        <Text>Ainda não possui nenhum dados</Text>
                    }
                />
            </View>
        </ScrollView>
    )
}