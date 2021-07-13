import { atom, selector } from "recoil";
import response from "../assets/data/response.json"
export const allPlayersState = selector({
    key: 'allPlayersState',
    get: async () => {
        return response.response.map(entry => ({
            id: string;
  name: string;
  match: string;
  price: number;
  position: Positions;
  totalPoints: number;
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