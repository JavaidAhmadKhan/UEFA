import React from "react";
import { View, Text } from "react-native";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <Text>Players</Text>
      <Text>0 / 15</Text>
      <Text>Remaining</Text>
      <Text>100m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  value: {},
});

export default TeamStats;
