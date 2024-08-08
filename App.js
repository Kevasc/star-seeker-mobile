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
import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import background image
const backgroundImage = require("./assets/background-image.jpg");

// Define the Tab Navigator
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="default" backgroundColor="#ffffff" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <Text style={styles.text}>
          Welcome to <Text style={styles.boldText}>Starseeker</Text>
        </Text> */}
      </ImageBackground>
      {/* <View style={styles.footerContainer}>
        <Button label="Gate information" />
        <Button label="Book a flight" />
      </View> */}
    </ScrollView>
  );
};

// Define SettingsScreen for the tab navigation
const GatesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gates Screen</Text>
    </View>
  );
};

// Define Tab Navigator
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gates" component={GatesScreen} />
    </Tab.Navigator>
  );
};

// Define Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          {/* Additional screens can be added here */}
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
    justifyContent: "cover",
    alignItems: "center",
    height: 850,
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
    backgroundColor: "#000000",
  },
});
