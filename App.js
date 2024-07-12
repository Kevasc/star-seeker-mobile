import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Button from "./components/Button";

const backgroundImage = require("./assets/background-image.jpg");

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>
          Welcome to <Text style={styles.boldText}>Starseeker</Text>
        </Text>
      </ImageBackground>
      <View style={styles.footerContainer}>
        <Button label="Gate information" />
        <Button label="Book a flight" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    padding: 50,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  footerContainer: {
    flex: 1 / 3,
    height: 600,
    alignItems: "center",
    color: "#FFFFFF",
    backgroundColor: "#000000",
  },
});
