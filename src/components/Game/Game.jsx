import {useSelector} from "react-redux";
import {selectIsX} from "../../reducers/gameSlice";
import { Matrix, StatusBar } from '../index';
import './styles.css';

export const Game = ({ player }) => {
    const isX = useSelector(selectIsX);
    const isActivePlayer = player === (isX ? 'X' : 'O');

    return (
        <div className="game">
            <StatusBar
                player={player}
                isActive={isActivePlayer}
            />
            <Matrix player={player} />
        </div>
    )
}