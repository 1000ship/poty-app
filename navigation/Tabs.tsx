import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import useColorScheme from "../hooks/useColorScheme";
import Colors from '../constants/Colors';

const Tabs = createBottomTabNavigator();

export default () => {
  const colorScheme = useColorScheme();
  const TabBarIcon = (props: { name: string; color: string }) => (
    <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
  );

  return (
    <Tabs.Navigator
    tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
