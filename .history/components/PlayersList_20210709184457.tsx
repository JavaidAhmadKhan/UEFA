import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { useRecoilState } from "recoil";
import { allPlayersState } from "../atoms/Players";

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
