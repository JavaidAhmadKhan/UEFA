import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { useRecoilState } from "recoil";
import { allPlayersState } from "../atoms/Players";

import PlayerListItem from "./PlayerListItem";

const PlayersList = () => {
  // const [players, setPlayers] = useRecoilState(allPlayersState);
const players = useRecoilState(allPlayersState)
  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
  );
};

export default PlayersList;
