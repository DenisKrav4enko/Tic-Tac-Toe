import {useDispatch, useSelector} from 'react-redux';
import {selectIsX, selectMatrix, selectWinner, setWinner, updateMatrix} from '../../reducers/gameSlice';
import {calculateWinner} from "../../utils";
import { Square } from '../Square/Square';
import './styles.css';
import {useEffect} from "react";

export const Matrix = ({ player }) => {
    const dispatch = useDispatch();
    const isX = useSelector(selectIsX);
    const winner = useSelector(selectWinner);
    const matrix = useSelector(selectMatrix);
    const isActivePlayer = player === (isX ? 'X' : 'O');

    useEffect(() => {
        (winner === "X" || winner === "O") && // console.log("LOOOOL")
        dispatch(setWinner(winner))
    }, [winner]);

    const handleOnSquareClick = index => {
        if (winner || !isActivePlayer) return;
        dispatch(updateMatrix({ index, value: isX ? 'X' : 'O'}));

    };

    const winningSquares = calculateWinner(matrix, winner);

    return (
        <div className="matrix">
            {matrix.map((symbol, index) => (
                <Square
                    key={index}
                    index={index}
                    symbol={symbol === 'X' ? 'xSymbol' : symbol === 'O' ? 'oSymbol' : ''}
                    isActive={isActivePlayer}
                    winningSquares={winningSquares}
                    handleOnSquareClick={handleOnSquareClick}
                />
            ))}
        </div>
    );
};