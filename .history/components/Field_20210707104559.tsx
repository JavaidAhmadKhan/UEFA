import React from "react";

import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  Text,
  View,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import field from "../assets/images/field.jpg";

const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

const Field = () => {
  return (
    <ImageBackground
      source={field}
      resizeMode="contain"
      style={{
        width: "100%",
        aspectRatio: 2 / 3,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {Object.keys(players).map((position) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {players[position].map((player) => (
            
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;
