import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Button from "./components/Button";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";

const backgroundImage = require("./assets/background-image.jpg");

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="default" backgroundColor="#ffffff" />
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
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          {/* Add more screens here */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
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
