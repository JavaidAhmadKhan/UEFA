import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRecoilState } from "recoil";
import { positionFilterState } from "../atoms/Players";

const positions = ["FWD", "MID", "DEF", "GCK"];

const Filters = () => {
  const [positionFilter, setPositionFilter] =
    useRecoilState(positionFilterState);

  console.log(positionFilter);

  const onFilterPress = (position: string) => {
    console.warn(position);
  };

  return (
    <View style={styles.container}>
      {positions.map(position =>(
        <Pressable
        onPress={() => onFilterPress("FWD")}
        style={styles.filterContainer}
      >
        <Text style={styles.text}>{position}</Text>
      </Pressable>
      ))}
      

      <Pressable
        onPress={() => onFilterPress("MID")}
        style={styles.filterContainer}
      >
        <Text style={styles.text}>MID</Text>
      </Pressable>

      <Pressable
        onPress={() => onFilterPress("DEF")}
        style={styles.filterContainer}
      >
        <Text style={styles.text}>DEF</Text>
      </Pressable>

      <Pressable
        onPress={() => onFilterPress("GCK")}
        style={styles.filterContainer}
      >
        <Text style={styles.text}>GCK</Text>
      </Pressable>
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

  filterContainer: {
    backgroundColor: "#ddd",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
  },
});

export default Filters;
