import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Players</Text>
      <Text style={styles.container}>0 / 15</Text>
      <Text style={styles.container}>Remaining</Text>
      <Text style={styles.container}>100m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  value: {},
});

export default TeamStats;
