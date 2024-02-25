import { createSlice } from '@reduxjs/toolkit';
import { calculateWinner } from '../utils';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        matrix: Array(9).fill(null),
        isX: true,
        winner: null,
        gameOver: false
    },
    reducers: {
        updateMatrix: (state, action) => {
            const { index, value } = action.payload;
            state.matrix = state.matrix.map((item, i) => (i === index ? value : item));
            state.isX = !state.isX;

            const winnerResult = calculateWinner(state.matrix);

            if (winnerResult) {
                state.winner = winnerResult;
                state.gameOver = true;
            } else if (!state.matrix.includes(null)) {
                state.gameOver = true;
                state.winner = "Draw";
            }
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
            state.gameOver = true;
        },
        resetGame: state => {
            state.matrix = Array(9).fill(null);
            state.isX = true;
            state.winner = null;
            state.gameOver = false;
        }
    }
});

export const { updateMatrix, setWinner, resetGame } = gameSlice.actions;

export const selectMatrix = state => state.game.matrix;
export const selectIsX = state => state.game.isX;
export const selectWinner = state => state.game.winner;
export const selectGameOver = state => state.game.gameOver;

export default gameSlice.reducer;
