import {useDispatch, useSelector} from 'react-redux';
import {selectIsX, selectMatrix, selectWinner, updateMatrix} from '../../reducers/gameSlice';
import { Square } from '../Square/Square';
import './styles.css';

export const Matrix = () => {
    const dispatch = useDispatch();
    const matrix = useSelector(selectMatrix);
    const isX = useSelector(selectIsX);
    const winner = useSelector(selectWinner);

    const handleOnSquareClick = index => {
        if (winner) return;
        dispatch(updateMatrix({ index, value: isX ? 'x' : 'o'}));
    };

    return (
        <div className="matrix">
            {matrix.map((symbol, index) => (
                <Square
                    key={index}
                    index={index}
                    symbol={symbol === 'x' ? 'xSymbol' : symbol === 'o' ? 'oSymbol' : ''}
                    handleOnSquareClick={handleOnSquareClick}
                />
            ))}
        </div>
    )
};