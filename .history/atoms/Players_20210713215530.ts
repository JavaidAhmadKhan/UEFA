import { atom, selector } from "recoil";
 
import { players } from "../assets/data/players";

export const myFormation =atom({
    key: "myFormation",
    default: {
        FWD: 3,
        MID: 3,
        DEF: 4,
        GCK: 1
    }
})

export const allPlayersState = atom({
    key: 'allPlayersState',
    default: players,
})

export const positionFilterState = atom({
    key: 'positionFilterState',
    default: [] as string[],
})

export const filteredPlayers = selector({
    key: 'filteredPlayers',
    get: ({ get }) => {
        const players = get(allPlayersState);
        const filters = get(positionFilterState);
        return players.filter(player => filters.length === 0 || filters.includes(player.position))
    }
});