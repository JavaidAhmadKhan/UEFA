import * as React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

import Field from '../components/Field'

export default function TabOneScreen() {
  return <SafeAreaView style={styles.container}>
<Field/>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
