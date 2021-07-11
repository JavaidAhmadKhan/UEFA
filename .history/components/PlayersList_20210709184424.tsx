import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { useRecoilState } from "recoil";
import PlayerListItem from "./PlayerListItem";

const PlayersList = () => {
  return (
    <BottomSheetFlatList
      data={[]}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
  );
};

export default PlayersList;
