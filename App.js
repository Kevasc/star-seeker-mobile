import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const backgroundImage = require("./assets/background-image.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={backgroundImage} style={styles.image} />
      </View>
      <Text style={styles.text}>Welcome to Starseeker</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "center",
    height: "100%",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    display: "flex",
    height: "80%",
    borderColor: "red",
  },
});
