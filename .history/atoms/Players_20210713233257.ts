import { atom, selector } from "recoil";
import response from "../assets/data/response.json"


const pos2pos = {
    Attacker: "FWD",
    Defender: "DEF",
    Midfielder: 'MID',
    Goalkeeper: "GCK",
}

export const allPlayersState = selector({
    key: 'allPlayersState',
    get: async () => {

        const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2020&page=2", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "9167518a83msh60b3f42f428c750p1859aejsn0ba7050783c1",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
        })

        const json = await response.json();

        return json.response.map(entry => ({
            id: entry.player.id,
            name: entry.player.name,
            match: "SDS v ZCC",
            price: 11300000,
            position: pos2pos[entry.statistics[0].games.position],
            totalPoints: 29,
        }))
    },
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