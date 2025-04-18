import { Text, View } from "react-native";
import DadosPessoas from "../components/dadosPessoas";

export default props => (

    <View>
        <DadosPessoas
            id="1"
            nome="David Israel"
            cpf="123456789"
            rg="123456789"
            dtnas="01/01/2000"
            tel="021-1234-1234"
            rua="Patolino bezerra"
            bairro="Caioaba"
            cep="35915-3535"
        />
        <DadosPessoas
            id="2"
            nome="David Israel"
            cpf="123456789"
            rg="123456789"
            dtnas="01/01/2000"
            tel="021-1234-1234"
            rua="Patolino bezerra"
            bairro="Caioaba"
            cep="35915-3535"
        />
    </View>
)