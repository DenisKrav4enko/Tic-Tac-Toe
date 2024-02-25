import logo from '../../logo.webp';
import './styles.css'
import {useDispatch, useSelector} from "react-redux";
import {resetGame, selectScores} from "../../reducers/gameSlice";

export const Header = () => {
    const dispatch = useDispatch();
    const score = useSelector(selectScores);

    const handleOnResetBtnClick = () => {
        dispatch(resetGame())
    }

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <div className="header__content">
                <h4>Score: {score.X} : {score.O}</h4>
                <button onClick={() => handleOnResetBtnClick()} className="btn">reset</button>
            </div>
        </div>
    )
}