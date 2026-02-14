import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#ff7b00",
            tabBarInactiveTintColor: "#8a8a8a",
            headerStyle: { backgroundColor: "#333333" },
            headerShadowVisible: false,
            tabBarStyle: { backgroundColor: "#333333" },
            headerTintColor: "#ffffff",
        }}
    >  
        <Tabs.Screen 
            name="index"
            options={{ 
                headerTitle: "Jagger's App",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={focused ? "home" : "home-outline"}
                        color={color}
                        size={24}
                    />
                ),
            }}
        />
        <Tabs.Screen
        name="about"
        options={{
            headerTitle: "About",
            tabBarIcon: ({ color, focused }) => (
                <Ionicons 
                    name={focused ? "information-circle" : "information-circle-outline"}
                    color={color}
                    size={24}
                />
            ),
        }}
        />
        <Tabs.Screen
        name="contact"
        options={{
            title: "Contact",
            tabBarIcon: ({ color, focused }) => (
                <Ionicons
                    name={focused ? "call" : "call-outline"}
                    color={color}
                    size={24}
                />
            ),
        }}
        />
    </Tabs>
  );
}