import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import Button from "./components/Button";

const backgroundImage = require("./assets/background-image.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>
          Welcome to <Text style={styles.boldText}>Starseeker</Text>
        </Text>
      </ImageBackground>
      <StatusBar style="auto" />
      <View style={styles.footerContainer}>
        <Button label="Gate information" />
        <Button label="Book a flight" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    marginBottom: 300,
  },
  boldText: {
    fontWeight: "bold",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    color: "black",
  },
});
