import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Pressable,
  Text,
} from "react-native";

import Field from "../components/Field";
import TeamStats from "../components/TeamStats";

export default function TabOneScreen() {
  const viewPlayers = () => {
    console.warn("View Player");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Field />
      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
});
