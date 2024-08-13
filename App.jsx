import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GateScreen from "./GateScreen";
import JourneyScreen from "./JourneyScreen";

// Import background image
const backgroundImage = require("./assets/background-image.jpg");

// Define the Tab Navigator
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="dark-content" />

        <ImageBackground
          source={backgroundImage}
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

// Define Tab Navigator
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000000",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gates" component={GateScreen} />
      <Tab.Screen name="Book your journey" component={JourneyScreen} />
    </Tab.Navigator>
  );
};

// Define Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={MyTabs} />
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
