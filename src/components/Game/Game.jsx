import { Matrix, StatusBar } from '../index';
import './styles.css';

export const Game = () => {

    return (
        <div className="game">
            <StatusBar />
            <Matrix />
        </div>
    )
}