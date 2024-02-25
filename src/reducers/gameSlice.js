import { createSlice } from '@reduxjs/toolkit';
import {calculateWinner} from '../utils';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        matrix: Array(9).fill(null),
        isX: true,
        winner: null,
    },
    reducers: {
        updateMatrix: (state, action) => {
            const { index, value } = action.payload;
            state.matrix = state.matrix.map((item, i) => (i === index ? value : item));
            state.isX = !state.isX;

            const winnerResult = calculateWinner(state.matrix);
            if (winnerResult) {
                state.winner = winnerResult;
            }
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
        }
    }
});

export const { updateMatrix, setWinner } = gameSlice.actions;

export const selectMatrix = state => state.game.matrix;
export const selectIsX = state => state.game.isX;
export const selectWinner = state => state.game.winner;

export default gameSlice.reducer;
