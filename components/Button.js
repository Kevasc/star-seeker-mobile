import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("Take me on an adventure...")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 400,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#000000",
    fontSize: 16,
  },
});
