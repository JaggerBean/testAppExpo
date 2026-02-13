import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>404 - Not Found</Text>
      <Link href={"/"} style={styles.Button}>
        Go to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e5e5e",
    },
    Text: {
    color: "#ffffff",
    },
    Button: {
    fontSize: 20,
    textDecorationLine: "underline",
    backgroundColor: "rgb(221, 184, 21)",
    color: "#33e60f",
    },
  });