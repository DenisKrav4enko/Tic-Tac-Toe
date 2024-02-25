import {useSelector} from "react-redux";
import {selectIsX, selectWinner} from "../../reducers/gameSlice";

export const StatusBar = () => {
    const isX = useSelector(selectIsX);
    const winner = useSelector(selectWinner);

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${isX ? 'X' : 'O'}`;
    }

    return (
        <div>{status}</div>
    )
};