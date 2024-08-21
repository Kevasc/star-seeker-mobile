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

const backgroundImage = require("./assets/background-image.jpg");

const Tab = createBottomTabNavigator(); // Define the Tab Navigator
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          barStyle="default"
          backgroundColor="#000000"
          translucent={false}
        />
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>
            Welcome to{" "}
            <Text style={[styles.boldText, { fontSize: styles.text.fontSize }]}>
              Starseeker
            </Text>
            {"\n"}
            <Text style={styles.smallText}>Your passport to the cosmos</Text>
          </Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const MyTabs = () => {
  // Define Tab screens
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0, // Removes the white border line at the top of the navigation tab bar
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Departures Information" component={GateScreen} />
      <Tab.Screen name="Book your journey" component={JourneyScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator(); // Defines the Stack Navigator

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
    justifyContent: "center",
    alignItems: "center",
    height: 790,
  },
  text: {
    color: "#ffffff",
    fontSize: 25,
    lineHeight: 30,
    fontFamily: "Roboto",
    paddingBottom: 250,
    textAlign: "center",
  },
  smallText: {
    fontSize: 15,
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
