import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { getDepartures } from "./api";

const gatesBackgroundImage = require("./assets/gates-background-image.jpg");

const GateScreen = () => {
  const [departures, setDepartures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartures = async () => {
      try {
        const data = await getDepartures();
        if (data) {
          setDepartures(data);
        }
      } catch (error) {
        setError("Failed to fetch departures.");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartures();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          source={gatesBackgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.title}>Departures</Text>
          {departures.map((departure, index) => (
            <View key={index} style={styles.departureItem}>
              <Text style={styles.departureText}>{departure.name}</Text>
            </View>
          ))}
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  departureItem: {
    marginVertical: 10,
  },
  departureText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default GateScreen;
