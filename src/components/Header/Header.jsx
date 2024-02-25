import logo from '../../logo.webp';
import './styles.css'

export const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <div className="header__content">
                {/*<h6>Player 1</h6>*/}
                <h4>Score: 0 : 0
                </h4>
                <button className="btn">reset</button>
                {/*<h6>Player 2</h6>*/}
            </div>
        </div>
    )
}