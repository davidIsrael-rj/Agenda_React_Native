import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { enableScreens } from "react-native-screens";
import Tabs from "./src/navegacao/Tabs";

enableScreens();
export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
      {/* <StatusBar backgroundColor={"#fff"} barStyle="dark-content" /> */}
      {/* <Text style={styles.textoContainer}>Agenda</Text> */}
      <Tabs />
    </NavigationContainer>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFF",
    // justifyContent: "center",
    // alignItems: "center"
  }
})