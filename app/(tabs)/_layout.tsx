import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#33e60f",
            tabBarInactiveTintColor: "#525252",
        }}
    >  
        <Tabs.Screen 
            name="index"
            options={{ 
                title: "Jagger's App",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
        name="about"
        options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle" color={color} size={size} />
            ),
        }}
        />
    </Tabs>
  );
}