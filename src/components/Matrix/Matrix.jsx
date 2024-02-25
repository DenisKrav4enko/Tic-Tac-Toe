import {useDispatch, useSelector} from 'react-redux';
import {selectIsX, selectMatrix, selectWinner, updateMatrix} from '../../reducers/gameSlice';
import {calculateWinner} from "../../utils";
import { Square } from '../Square/Square';
import './styles.css';

export const Matrix = ({ player }) => {
    const dispatch = useDispatch();
    const isX = useSelector(selectIsX);
    const winner = useSelector(selectWinner);
    const matrix = useSelector(selectMatrix);
    const isActivePlayer = player === (isX ? 'X' : 'O');

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