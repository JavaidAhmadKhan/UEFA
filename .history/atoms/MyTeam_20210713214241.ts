import { atom, selector } from "recoil";
import { Player } from "../types";

export const myPlayersState = atom({
    key: 'myPlayersState',
    default: [] as Player[],
});


const positions = ["FWD", "MID", "DEF", "GCK"];


export const myPlayersByPosition = selector({
    key: 'myPlayersByPosition',
    get: ({ get }) => {
        const players = get(myPlayersState);

        const groupedPlayers = {};

        positions.forEach(position => {
            groupedPlayers[position] = players.filter(p => p.position === position);
        })

    }
})