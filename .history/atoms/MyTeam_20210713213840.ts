import { atom, selector } from "recoil";
import { Player } from "../types";

export const myPlayersState = atom({
    key: 'myPlayersState',
    default: [] as Player[]
});


export const myPlayersByPosition = selector({
    key: 'myPlayersByPosition',
    get: ({ get }) => {
        const players = get(myPlayersState);
        const groupedPlayers = {}
    }
})