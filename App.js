import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const PlaceholderImage = require("./assets/background-image.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={{ color: "#fff", fontSize: "16px" }}>
        Welcome to Starseeker
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
