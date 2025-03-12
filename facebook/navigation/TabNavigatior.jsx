import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import FeedsScreen from "../screens/FeedsScreen";
import { Icon } from "react-native-elements";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#1877F2",
          tabBarIndicatorStyle: { backgroundColor: "#1877F2" },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => <Icon name="home" type="font-awesome" size={20} />
          }}
        />
        <Tab.Screen name="Feeds" component={FeedsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
