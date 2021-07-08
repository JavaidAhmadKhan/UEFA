import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>FWD</Text>
      </View>

      <View>
        <Text style={styles.text}>MID</Text>
      </View>

      <Text style={styles.text}>DEF</Text>
      <Text style={styles.text}>GCK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },

  filterContainer: {},

  text: {
    backgroundColor: "#ddd",
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Filters;
