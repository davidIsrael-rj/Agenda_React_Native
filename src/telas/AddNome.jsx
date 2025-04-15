import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
export default props => (
    
    <View>
        <Icon name="home" size={28} color={'#000'}/>
        <Text>Adicionar Nomes</Text>
    </View>
)