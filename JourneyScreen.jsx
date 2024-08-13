import {
  Text,
  StyleSheet,
  // View,
  // ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";

const JourneyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>test</Text>
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

export default JourneyScreen;
