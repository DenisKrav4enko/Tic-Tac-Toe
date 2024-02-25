import './styles.css';

export const Square = props => {
    const { symbol, index, handleOnSquareClick } = props;

    return (
        <div
            className={`square ${symbol}`}
            onClick={() => handleOnSquareClick(index)}
        >
        </div>
    )
}