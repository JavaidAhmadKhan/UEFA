import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Pressable,
  Text,
} from "react-native";

import Field from "../components/Field";

export default function TabOneScreen() {
  const viewPlayers = () => {
    console.warn("View Player");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Field />
      <Pressable
        onPress={viewPlayers}
        style={{ backgroundColor: "orange", width: "90%", margin :20 }}
      >
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
});
