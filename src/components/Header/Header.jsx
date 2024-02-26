import {useDispatch, useSelector} from "react-redux";
import {resetGame, selectScores} from "../../reducers/gameSlice";
import logo from '../../logo.webp';
import './styles.css'

export const Header = () => {
    const dispatch = useDispatch();
    const score = useSelector(selectScores);

    const handleOnResetBtnClick = () => {
        dispatch(resetGame())
    }

    return (
        <div className="header">
            <img
                src={logo}
                alt="logo"
                className="logo"
            />
            <div className="header__content">
                <h4>
                    Score: {score.X} : {score.O}
                </h4>
                <button
                    onClick={() => handleOnResetBtnClick()}
                    className="btn"
                >
                    RESET
                </button>
            </div>
        </div>
    )
}