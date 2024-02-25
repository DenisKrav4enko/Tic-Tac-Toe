import './styles.css';

export const Square = props => {
    const { symbol, index, handleOnSquareClick, isActive, winningSquares } = props;
    const isWinningSquare = winningSquares && winningSquares.includes(index)

    return (
        <div
            className={`square ${symbol} ${isWinningSquare ? 'winning' : ''}`}
            onClick={() => isActive && handleOnSquareClick(index)}
        >
        </div>
    );
};