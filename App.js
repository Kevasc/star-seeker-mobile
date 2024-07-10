import { StyleSheet, Text, View, ImageBackground } from "react-native";

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
});
