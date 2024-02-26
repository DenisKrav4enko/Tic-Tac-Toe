import './styles.css'

export const Header = ({ player, setIsChatOpen }) => {
    return <div className="chat__header">
        <h5 className="name">
            {player === "X" ? "Player 1" : "Player 2"}
        </h5>
        <div
            className="cross-button"
            onClick={() => setIsChatOpen(prevState => !prevState)}
        ></div>
    </div>
}