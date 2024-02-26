import './styles.css';

export const Square = props => {
    const {
        symbol,
        index,
        isActive,
        winningSquares,
        handleOnSquareClick
    } = props;
    const isWinningSquare = winningSquares && winningSquares.includes(index)

    return (
        <div
            onClick={() => isActive && handleOnSquareClick(index)}
            className={`square ${symbol} ${isWinningSquare ? 'winning' : ''} ${isActive ? '' : 'disable'}`}
        >
        </div>
    );
};