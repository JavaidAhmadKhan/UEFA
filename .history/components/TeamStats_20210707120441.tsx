import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>0 / 15</Text>
      </View>

      <Text style={styles.label}>Remaining</Text>
      <Text style={styles.value}>100m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  value: {},
});

export default TeamStats;
