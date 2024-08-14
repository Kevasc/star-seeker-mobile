import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
const gatesBackgroundImage = require("./assets/gates-background-image.jpg");
const GateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          source={gatesBackgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>
            Welcome to{" "}
            <Text style={styles.boldText} fontSize={styles.text}>
              Starseeker
            </Text>
          </Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    flex: 1,
    justifyContent: "cover",
    alignItems: "center",
    height: 790,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 84,
    paddingTop: 150,
    textAlign: "center",
    borderColor: " #4169E1 ", // Set your border color here
    borderWidth: 2, // Set your border width here
    borderStyle: "solid", // Optional: solid is default
  },
  boldText: {
    fontWeight: "bold",
  },
  footerContainer: {
    flex: 1 / 3,
    height: 600,
    alignItems: "center",
    backgroundColor: "#B284BE",
  },
});

export default GateScreen;
