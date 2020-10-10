import React, {  useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TheaterScreen from "../screens/TheaterScreen";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

export default function ( props: BottomTabNavigationProp) {
  const { navigation, route } = props;
  const colorScheme = useColorScheme();
  const TabBarIcon = (props: { name: string; color: string; }) => (
    <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
  );

  useLayoutEffect(() => {
    const currentScreenName = route?.state?.routeNames[route?.state?.index] ?? "Home";
    navigation?.setOptions({
      title: currentScreenName,
    });
  }, [route]);

  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }} />
      <Tab.Screen
        name="Theater2"
        component={TheaterScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-tv" color={color} />
          ),
        }} />
    </Tab.Navigator>
  );
};
