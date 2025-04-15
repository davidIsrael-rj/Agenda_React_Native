import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddNome from "../telas/AddNome";
import Comeco from "../telas/Comeco";
import Summary from "../telas/Summary";

const Tab = createBottomTabNavigator()
Icon.loadFont();

export default props => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      tabBarShowLabel: true,
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'blue',
      tabBarStyle: { height: 160, width: '100%' }, 
      tabBarIcon: ({ color, size = 40 }) => (
        <Icon name='eye-arrow-right-outline' size={28} color={color} />
      ),
    
    })}

  >

<Tab.Screen name="AddNome" component={AddNome} options={{ tabBarLabel: 'Inicial' }} />
  

    <Tab.Screen name="Comeco" component={Comeco} options={{ tabBarLabel: 'Dados' }} />
    <Tab.Screen name="Summary" component={Summary} options={{ tabBarLabel: 'Configurações' }} />
  </Tab.Navigator>
)