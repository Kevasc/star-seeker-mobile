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
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, styles.columnName]}>
                Destination
              </Text>
              <Text style={[styles.tableHeaderText, styles.columnGate]}>
                Flight Code
              </Text>
              <Text style={[styles.tableHeaderText, styles.columnTime]}>
                Connecting Flights
              </Text>
            </View>
            {departures.map((departure, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableText, styles.columnName]}>
                  {departure.name}
                </Text>
                <Text style={[styles.tableText, styles.columnGate]}>
                  {departure.gate}
                </Text>
                <Text style={[styles.tableText, styles.columnTime]}>
                  {departure.time}
                </Text>
              </View>
            ))}
          </View>
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
  table: {
    width: "100%",
    paddingHorizontal: 20,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 5,
    borderBottomColor: "#ffffff",
    paddingVertical: 10,
  },
  tableHeaderText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
    paddingVertical: 10,
  },
  tableText: {
    color: "#ffffff",
    fontSize: 16,
  },
  columnName: {
    flex: 2,
  },
  columnGate: {
    flex: 1,
    textAlign: "center",
  },
  columnTime: {
    flex: 1,
    textAlign: "right",
  },
});

export default GateScreen;
