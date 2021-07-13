import { atom } from "recoil";
import { Player } from "../types";

export const myPlayersState = atom({
    key: 'myPlayersState',
    default: [] as Player[]
})