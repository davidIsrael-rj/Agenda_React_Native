import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const DadosContext = createContext()

export default function GlobalState({ children }) {
    const [transacao, setTransacao] = useState([])

    useEffect(() => {
        const getAsyncStorage = async () => {
            try {
                const storedTransacao = await AsyncStorage.getItem("transacao")
                if (storedTransacao) {
                    setTransacao(JSON.parse(storedTransacao))
                }
            } catch (e) {
                console.log(e)
            }
        }
        getAsyncStorage()
    }, [])

    useEffect(() => {
        const saveAsyncStorage = async () => {
            try {
                await AsyncStorage.setItem("transacao", JSON.stringify(transacao))
            } catch (e) {
                console.log(e)
            }
        }
        saveAsyncStorage()
    }, [transacao])

    return (
        <DadosContext.Provider value={[transacao, setTransacao]}>
            {children}
        </DadosContext.Provider>
    )
}
