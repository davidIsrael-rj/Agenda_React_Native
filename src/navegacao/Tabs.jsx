import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddNome from "../telas/AddNome";
import Lista from "../telas/Lista";

const Tab = createBottomTabNavigator()

export default function Tabs() {
return(
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      tabBarShowLabel: true,
      tabBarActiveTintColor: '#4f4f4f',
      tabBarInactiveTintColor: '#c0c0c0',
      tabBarStyle: { height: 60, width: '100%' },
      tabBarIcon: ({ focused, color, size }) => {
        switch (route.name){
          case 'Lista':
            iconName = focused
            ? 'account-details'
            : 'account-details-outline'
            break;
          case 'Adicionar':
          iconName = focused
            ? 'account-edit'
            : 'account-edit-outline'
        }
        return <Icon name={iconName} size={size} color={color} />
      
      },
    })}

  >

    <Tab.Screen name="Lista" component={Lista} options={{ tabBarLabel: 'Lista' }} />
    <Tab.Screen name="Adicionar" component={AddNome} options={{ tabBarLabel: 'Adicionar' }} />
  </Tab.Navigator>
)}