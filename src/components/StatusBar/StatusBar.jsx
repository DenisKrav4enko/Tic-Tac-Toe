import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectWinner, selectGameOver, refreshGame} from '../../reducers/gameSlice';
import './styles.css'

export const StatusBar = props => {
    const { player, isActive } = props;
    const dispatch = useDispatch();
    const winner = useSelector(selectWinner);
    const gameOver = useSelector(selectGameOver);

    useEffect(() => {
        if (gameOver) {
            setTimeout(() => {
                dispatch(refreshGame());
            }, 5000);
        }
    }, [gameOver]);

    let status;
    let activeClass

    if (gameOver) {
        if (winner === player) {
             status = `You win!`;
            activeClass = 'yellow'
        } else if (winner && winner !== player && winner !== "Draw") {
             status = `You lost!`;
            activeClass = 'red'
        } else {
            status = winner;
            activeClass = 'green'
        }
    } else {
        status = `Your turn!`;
    }

    return (
        <div className="status-bar">
            <h4>Player {player === 'X' ? 1 : 2}</h4>

            {gameOver
                ? (<p className={`${activeClass}`}>
                    {status}
                </p>)
                : isActive
                    ? <p>{status}</p>
                    : <p>Waiting for opponent...</p>
            }
        </div>
    );
};