import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <Text>FWD</Text>
      <Text>MID</Text>
      <Text>DEF</Text>
      <Text>GCK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  text: {},
});

export default Filters;
