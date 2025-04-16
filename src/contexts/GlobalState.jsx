import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const DadosContext = createContext()

export default function GlobalState({ children }) {
    const [transacao, setTransacao] = useState([])

    useEffect(() => {
        //AsyncStorage.clear()
        const getAsyncStorage = async () => {
            try {
                const storedTransacao = AsyncStorage.getItem("transacao")
                if (storedTransacao) {
                    setTransacao(JSON.parse(storedTransacao))
                }
            } catch (e) {
                console.log(e)
            }
        }
        getAsyncStorage()
    }, [])
    return (
        <DadosContext.Provider
            value={[transacao, setTransacao]}>
            {children}
        </DadosContext.Provider>
    )
}