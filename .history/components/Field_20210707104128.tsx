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
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="tshirt"
                size={35}
                color={player ? "#d170db" : "#5c5c5cbb"}
              />
              <Text
                style={{
                  backgroundColor: "#333333bb",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  padding: 2,
                  paddingHorizontal: 7,
                }}
              >
                {position}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;
