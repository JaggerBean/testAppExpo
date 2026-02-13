import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Style Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    backgroundColor: "#6b6b6b",
  },
  Text: {
    color: "#ffffff",
  },
  Button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#33e60f",
  },
});




