import React from "react";
import { View, Text, Image } from "react-native";

const PlayerListItem = () => {
  return (
    <View>
      <Image />
      <View>
        <Text>C. Ronaldo</Text>
        <Text>GSD vs SJD</Text>
      </View>

      <View>
        <Text>$10.1m</Text>
        <Text>MID</Text>
      </View>
      <Text>29</Text>
    </View>
  );
};

const styles = StyleSheet.create({})

export default PlayerListItem;
