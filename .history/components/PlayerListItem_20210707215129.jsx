import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PlayerListItem = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <View>
        <Text style={styles.name}>C. Ronaldo</Text>
        <Text>GSD vs SJD</Text>
      </View>

      <View>
        <Text style={styles.name}>$10.1m</Text>
        <Text>MID</Text>
      </View>
      <Text style={styles.points}>29</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding:  0,
  },
  image: {},
  name: {},
  points: {},
});

export default PlayerListItem;
